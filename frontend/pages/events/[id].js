import styles from '../../styles/ShowEvent.module.css';
import img1 from "../../assets/images/homeImage/isebg.jpg";
import Image from 'next/dist/client/image';
import { useRouter } from 'next/router'

import {fetchSingleEvent} from '../../pages/api/api'

import React, { useEffect, useState} from "react";


import Moment from 'react-moment';

import { Row, Col, Container, Card, CardBody, Spinner, Button, Badge, Modal, ModalHeader, ModalBody, ModalFooter,FormGroup,Label,Input } from "reactstrap";

import {registerEvent} from '../../pages/api/api'

import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

import { signOut, useSession } from 'next-auth/react'

import { useQuery, gql } from "@apollo/client";
import moment from 'moment';




import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import FeedbackForm from '../../components/events/FeedbackForm';



const EVENT_QUERY = gql`
query ($where: EventWhereUniqueInput!) {
    event(where:$where) {
      id
      img
      title
    	description
        startDate
          endDate
          venue
          registrationEndDate
          eventType
            attendanceCode
            category{
                name
            }
      eventRegistrations{
      	user{
          id
          firstName
          lastName
        }
        id
        isAttended
        createdAt
      }
    }
  }      
`;



function ShowEvent() {

    const router = useRouter()
    const { id } = router.query

    const { data: session, status } = useSession()

    const { data, refetch, loading, error } = useQuery(EVENT_QUERY, {
        variables: {
            "where": {
              "id": router.query.id
            }
          },
          fetchPolicy: 'cache-and-network'
      });


    const [state, setState] = useState();


    const [modal, setModal] = useState(false);
    const [teamMembers, setTeamMembers] = useState("");
     const toggle = () => setModal(!modal);

    

    function onRegister() {
        if(data.event.eventType == "Team"){
            if(!teamMembers){
                toast.info("Enter team members details", {
                    position: "bottom-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                    })
                    return
            }
           
        }
        registerEvent(data.event.id, session.user.id, teamMembers).then((p) => {
            refetch().then((p) => {
                toast.success("Registered Successfully", {
                    position: "bottom-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                    })
                
            })


           
        }).catch((err) => {
            toast.error("Something Wrong", {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                })

            });
    }




    if (loading)
    return (
      <section class="section mt-3">
          <div class="container">
                  <div class="row">
                      
                      <div class="col-lg-8 col-lg-7">
      
      
                      <Skeleton count={10}/>
      
                      
      
                  
                  
                      </div>
              
      
                      <div class="col-lg-4 col-md-5 mt-4 mt-sm-0 pt-2 pt-sm-0 ">
                          <div class="card border-0 bg-light p-4 shadow">
                              <div class="card-body">
      
      
                                  <div class="widget mb-4 pb-2">
                                  
                                  <Skeleton count={10}/>
      
      
      
                              
      
                                  </div>
      
                              </div>
                          </div>
                      
                      </div>
                  </div>
      
              </div>
          </section>
    );
if (error)
    return (
        <div className="flex h-screen w-full items-center justify-center bg-stone-900 text-white">
            Something went wrong!!
        </div>
    );



        
function getRegDetails(){
    let regDetail = ""
    data.event.eventRegistrations.find(
        (reg) => {
            if(reg.user.id === session.user.id){
                regDetail = reg
            }
        }
    )
    return regDetail
}



const today = moment();
const isRegistrationOpen = moment(data.event.registrationEndDate).isAfter(today);

    return (
        
      <section class="section mt-3">
                   <ToastContainer />
          <div class="container">
                  <div class="row">
                      
                      <div class="col-lg-8 col-lg-7">
      
      
               <img
                              className="img-fluid rounded shadow"
                              src={data.event.img ? data.event.img : img1}
                              style={{
                                width: "100%",
                              }}
                            />
                          <h4 class="mt-4">{data.event.title}</h4>
                          <p>{data.event.description}</p>
      
                      
      
                  
                  
                      </div>
              
      
                      <div class="col-lg-4 col-md-5 mt-4 mt-sm-0 pt-2 pt-sm-0 ">
                          <div class="card border-0 bg-light p-4 shadow">
                              <div class="card-body">
      
      
                                  <div class="widget mb-4 pb-2">
                                  
                                  <Badge color="primary" className='text-white p-2 mb-2'>
                                            { data.event.category ? data.event.category.name: 'Uncategorized'}
                                            </Badge>
                                  <Badge color="danger" className='text-white p-2 mb-2 ml-2'>
                                            { data.event.eventType ? data.event.eventType: ''}
                                            </Badge>
                                  <p>Start Date</p>
                                  <h6><Moment format="DD/MM/YYYY h:mm a" >{data.event.startDate}</Moment></h6>
                                  <p>End Date</p>
                                  <h6><Moment format="DD/MM/YYYY h:mm a" >{data.event.endDate}</Moment></h6>
      
                                  <p>Registration End Date</p>
                                  <h6><Moment format="DD/MM/YYYY h:mm a" >{data.event.registrationEndDate}</Moment></h6>
      
                                  <p>Venue</p>
                                  <h6>{data.event.venue}</h6>
                                  

                                  {
                                
                                    session && session.user.roles.includes("eventManager") ?
                                    <></>
                                    :
                                    data.event.eventRegistrations.find(
                                        (reg) => reg.user.id === session.user.id) ? 
                              
                                    <div>
                                            <h2>
                                            <Badge color="success" className='text-white p-2'>
                                            Registered
                                            </Badge>
                                        </h2>
                                        {
                                            data.event.attendanceCode ?
                                        <Button color="primary" onClick={toggle}>Attendance</Button> : <></>
                                        }
                                        
                                        </div>
                                     : 

                                     //check if registration is open
                                     isRegistrationOpen ?

                                     
                                       ( data.event.eventType === "Team" ?
                                        (
                                            <>
                                                     <FormGroup row>
                                                    <Label for="exampleText" sm={12}>Team Members</Label>
                                                    <Col sm={10}>
                                                    <Input type="textarea" name="text" id="exampleText" value={teamMembers}  onChange={(e) => setTeamMembers(e.target.value)}/>
                                                    </Col>
                                                </FormGroup>
                                                <Button color="primary" onClick={() => onRegister()}>Register</Button>
                                          </>
                                        ): <Button color="primary" onClick={() => onRegister()}>Register</Button>)
                                     

                                     :  <p>
                                        <Badge color="danger" className='text-white p-2'>
                                        Registration Closed
                                        </Badge>
                                     </p>
                                  }

                       
                                  
                                  <br/>
                                  {/* <span class="badge badge-success mb-4">Registered</span> */}
 
      
                                  </div>
      
                              </div>
                          </div>
                      
                      </div>
                  </div>
      
              </div>





                <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>Attendance and Feedback</ModalHeader>
                <ModalBody>

                    {

                                        <FeedbackForm event={data.event} reg={getRegDetails()}/>
                           
                           
                    }
                        
                </ModalBody>
         
              </Modal>
 


          </section>
        );




}

export default ShowEvent;
