/* eslint-disable */
import React from "react";
import { Row, Col, Container, Card, CardBody,Spinner } from "reactstrap";

import Image from "next/image";
import img1 from "../../assets/images/homeImage/isebg.jpg";

import { useQuery, gql } from "@apollo/client";

import Moment from 'react-moment';
import Link from "next/dist/client/link";
import { useRouter } from 'next/router'




const LatestEvent = () => {

    const router = useRouter()
    const { id } = router.query


    const SINGLE_BRANCH_EVENT_QUERY = gql`
query {
    branch(where: { id: "${id}" }) {
      id
      name
      createdAt
      updatedAt
      events {
        id
        title
        description
        startDate
        endDate
        venue
        createdAt
        updatedAt
        img
        eventRegistrations{
          user {
            firstName
            lastName
            email
            id
          }
        }
      }
    
    }
  }
`;

  const { data, loading, error } = useQuery(SINGLE_BRANCH_EVENT_QUERY);

  if (loading) return (
      <Row className="justify-content-center">
      <Col md="7" className="text-center mt-4">
      <Spinner animation="border" variant="primary" />
      </Col>
    </Row>

  );
  if (error) return <pre>{error.message}</pre>


  return (
    <div>
      <div className="spacer">
        <Container>
          {/* <Row className="justify-content-center">
            <Col md="7" className="text-center">
              <h2 className="title">Events we are conducting in our college</h2>
              <h6 className="subtitle">
                student can participet in any event and join or book the events according to there shedule join soon as possible
              </h6>
            </Col>
          </Row> */}

              <Row className="justify-content-left">
                <Col md="12" className="text-center">
                  <h2 className="title" >{data.branch.name} Events</h2>
                </Col>

                {
                  data.branch.events.length == 0 ? (
                    <Col md="12" className="text-center">
                      <h6 className="title" >Oop..No Events Found</h6>
                    </Col>
                  ) : null
                }
                {data.branch.events.map((event) => (
                  <Col md="4">
                  <Card className="card-shadow">
                    <a  className="img-ho">
                      <Link href={`events/${event.id}`}>
                      <img
                        className="card-img-top"
                        src={event.img ? event.img : img1}
                      />
                      </Link>
                    </a>
                    <CardBody>
                      <h5 className="font-medium m-b-0">
                      {event.title}
                      </h5>
                      <p className="m-b-0 font-14">
                        Start Date - <Moment format="DD/MM/YYYY h:mm a" >{event.startDate}</Moment></p>
                    </CardBody>
                  </Card>
                </Col>
                ))}
              </Row>

        
            
            
        </Container>
      </div>
    </div>
  );
};

export default LatestEvent;
