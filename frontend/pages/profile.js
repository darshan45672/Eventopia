import Image from "next/image";

import {deleteEventRegistration} from './api/api'

import { useRouter } from 'next/router'

import React, { useEffect, useState } from "react";

import { signOut, useSession, getSession } from 'next-auth/react'
import Link from 'next/link'
import { Row, Col,
    Container,  CardBody,Spinner,Badge,Button,Modal,ModalBody,
    ModalFooter,ModalHeader,TabPane,TabContent,NavItem,Nav, NavLink } from "reactstrap";

    import {Tabs, Tab} from 'react-bootstrap-tabs';

import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

import { useQuery, gql } from "@apollo/client";

import Moment from 'react-moment';

import CreateEvent from "../components/events/CreateEvent";
import axios from "axios";

import QRCode from "react-qr-code";

import profileImg from "../assets/images/profile.png"

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Branch from "./branches";
import BranchEventTable from "../components/events/BranchEventTable";

import UploadProfileButton from '../components/profile/UploadProfileButton'

const USER_QUERY = gql`
query ($where: UserWhereUniqueInput!) {
    user(where:$where) {
      id
      username
      firstName
      lastName
      email
      profilePath
      usn
      branch{
        name
        id
      }
      gender
      roles
      createdAt
      eventRegistrations{
        id
        event{
          title
          id
          startDate
          endDate
        }
        teamMembers
        createdAt
      }
    }
  }      
`;




const Profile = ({user}) => {
    // return

    const { data: session, status } = useSession()

    const [modal, setModal] = useState(false);



    

 
    if (!user) {
        return (<div className="container">
        <div className="text-center mt-4">
            <h3 className="text-4xl font-bold mb-4">You are not logged in</h3>
            <Link href="login">
            <button className="btn btn-primary">Sign in</button>
            </Link>
        </div>
    </div>)
    }


    const { data,refetch, loading, error } = useQuery(USER_QUERY, {
        variables: {
            "where": {
              "id": user.id
            }
          },
      });

      const toggle = () => {
        setModal(!modal);
        if(!modal){
            refetch();
        }
    };

      const handleUnregister = async (id) => {
        deleteEventRegistration(id).then((res) => {
            refetch();
            toast.success("Unregistered Successfully", {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
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

            })
        
      }
      

      if (status != "authenticated") {
        return (
            <div className="container">
                <div className="text-center mt-4">
                    <h3 className="text-4xl font-bold mb-4">You are not logged in</h3>
                    <Link href="login">
                    <button className="btn btn-primary">Sign in</button>
                    </Link>
                </div>
            </div>
        );
      }

    // if (!data) return null;


    
    if (loading)
    return (

        <section >
                     <ToastContainer />
        <div class="container py-5">
         

            <div class="row">
            <div class="col-lg-4">
                <div class="card mb-4">
                <div class="card-body text-center">
                
                <Skeleton count={10}/>
                </div>
                </div>
            </div>
            <div class="col-lg-8">
                <div class="card mb-4">
                <div class="card-body">
              

                <div class="row">
                <Skeleton count={10}/>

               
                </div>
                </div>
                </div>

                <div class="row">
                <div class="col-md-12">
                    <div class="card mb-4 mb-md-0">
                    <div class="card-body">
                        <Skeleton count={10}/>
                    </div>
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




    return (
        <section >
            <div class="container py-5">
             

                <div class="row">
                <div class="col-lg-4">
                    <div class="card mb-4 shadow">
                    <div class="card-body text-center">
                    

{
    data.user.profilePath ?
    <Image
                      class="rounded-circle img-fluid"
                    src={data.user.profilePath}
                    width={100}
                    height={100}
                  />
 :
 <Image
                      class="rounded-circle img-fluid"
                    src={profileImg}
                    width={100}
                    height={100}
                  />
}

                  <UploadProfileButton user_id={data.user.id} onUpdate={refetch}/>

                        <h5 class="mt-2">{data.user.firstName} {data.user.lastName}</h5>
                        <h4>
                        <Badge color="info badge-lg">
                        {data.user.branch.name}
                        </Badge>
                      </h4>
                           
                        <p class="text-muted mb-1">USN: {data.user.usn}</p>
                        <div class="d-flex justify-content-center mb-2">
                        
                        <Link href="/events">
                        <button type="button" class="btn btn-info ml-2">Events</button>
                        </Link>
                        <button type="button" class="btn btn-outline-info ms-1 ml-2" onClick={() => signOut()}>Logout</button>
                        
                        </div>
                       
                    </div>
                    </div>
                    {/* <div class="card mb-4 mb-lg-0 shadow">
                    <div class="card-body p-0">
                    <div className="row">
                        <div className="col-md-12 text-center pt-4 pb-4">
                        <QRCode
                        style={{ height: "auto", maxWidth: "50%", width: "100%" }}
                        size={200} value="hey" />
                        </div>
                        </div>
                    </div>
                    </div> */}
                </div>
                <div class="col-lg-8">
                    <div class="card mb-4 shadow">
                    <div class="card-body">
                  

                    <Tabs onSelect={(index, label) => console.log(label + ' selected')}>
                    <Tab label="Profile">
                    <div class="row mt-2">
                        <div class="col-sm-3">
                            <p class="mb-0">ID</p>
                        </div>
                        <div class="col-sm-9">
                            <p class="text-muted mb-0">{data.user.id}</p>
                        </div>
                        </div>

                        <hr/>

                    <div class="row">
                        <div class="col-sm-3">
                            <p class="mb-0">Username</p>
                        </div>
                        <div class="col-sm-9">
                            <p class="text-muted mb-0">@{data.user.username}</p>
                        </div>
                        </div>

                        <hr/>


                        <div class="row">
                        <div class="col-sm-3">
                            <p class="mb-0">Full Name</p>
                        </div>
                        <div class="col-sm-9">
                            <p class="text-muted mb-0">{data.user.firstName} {data.user.lastName}</p>
                        </div>
                        </div>
                        <hr />
                        <div class="row">
                        <div class="col-sm-3">
                            <p class="mb-0">Email</p>
                        </div>
                        <div class="col-sm-9">
                            <p class="text-muted mb-0">{data.user.email}</p>
                        </div>
                        </div>
                       
                        <hr/>
                    </Tab>
                    {
                         data.user.roles.includes("eventManager") ? 
                            <Tab label={`${data.user.branch.name} Events`}>
                            <div className="row">
                                <div className="col-9"></div>
                                <div className="col-3 mt-2">
                                <button type="button" class="btn-danger ms-1 ml-2 p-2 mb-2"onClick={toggle}>
                             Create Event
                         </button>
                                </div>
                            </div>
                            <BranchEventTable branchId={data.user.branch.id} />
                            </Tab>
                         : <Tab label="Event Registrations">
                    <table class="table mt-2">
                                <thead class="bg-info text-white">
                                    <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Start Date</th>
                                    <th scope="col">Registered Date</th>
                                    <th scope="col">Team Members</th>
                                    <th scope="col">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    
                                   {
                                        data.user.eventRegistrations.map((reg, index) => {
                                            return (
                                                <tr key={index}>
                                                    <th scope="row">{index + 1}</th>
                                                    <td>{reg.event.title}</td>
                                                    <td>
                                                    <Moment format="DD/MM/YYYY h:mm a" >{reg.event.startDate}</Moment>
                                                    </td>
                                                 
                                                    <td>
                                                    <Moment format="DD/MM/YYYY h:mm a" >{reg.createdAt}</Moment>
                                                    </td>
                                                    <td>
                                                        {reg.teamMembers}
                                                    </td>
                                                    <td>
                                                        <button className="btn btn-danger btn-sm" onClick={() => handleUnregister(reg.id)}>Unregister</button>
                                                    </td>
                                                </tr>
                                            )})
                                   }
                                    
                                </tbody>
                            </table>
                    </Tab>
                    }
                    
                </Tabs>
                    
                      
                    </div>
                    </div>
                    <div class="row">
                  
                    
                    </div>
                </div>
                </div>
            </div>


            <Modal isOpen={modal} toggle={toggle} onExit={refetch}>
                <ModalHeader toggle={toggle}>Create Event</ModalHeader>
                <ModalBody>
                <CreateEvent user={data.user} onUpdate={refetch} />
                </ModalBody>
             
            </Modal>

            </section>
    );
}


export default Profile;


export async function getServerSideProps(ctx) {
    const session = await getSession(ctx)
    if (!session) {
      return {
        props: {}
      }
    }
    const { user } = session;
    return {
      props: { user },
    }
}