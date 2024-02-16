/* eslint-disable */
import React from "react";
import { Row, Col, Container, Card, CardBody,Spinner } from "reactstrap";

import Image from "next/image";
import img2 from "../../../assets/images/homeImage/eeebg.png";
import img3 from "../../../assets/images/homeImage/cse2bg.png";
import img1 from "../../../assets/images/homeImage/isebg.jpg";
import img4 from "../../../assets/images/homeImage/mebg.jpg";
import img5 from "../../../assets/images/homeImage/eee2bg.png";
import img6 from "../../../assets/images/homeImage/civilbg.jpg";

import { useQuery, gql } from "@apollo/client";

import Moment from 'react-moment';
import Link from "next/dist/client/link";


import EventCard from "../../events/EventCard";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

const EVENTS_QUERY = gql`
{
  branches{
    id
    name
    events{
      title
      startDate
      endDate
      venue
      id
      img
    }
  }
}
`;

const EventComponent = () => {

  const { data, loading, error } = useQuery(EVENTS_QUERY);

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
          <Row className="justify-content-center">
            <Col md="7" className="text-center">
              <h2 className="title">Events we are conducting in our college</h2>
              <h6 className="subtitle">
                student can participet in any event and join or book the events according to there shedule join soon as possible
              </h6>
            </Col>
          </Row>

          {data.branches.map((branch) => (
              branch.events.length > 0 ? (

              <Row className="justify-content-left">
                <Col md="12" className="text-center">
                  <h2 className="title" >{branch.name}</h2>
                </Col>

                {branch.events.map((event) => (
                  <Col md="4">
                      <EventCard event={event} />
                </Col>
                ))}
              </Row>

                              
              ) : ""
            )
            
            )}
            
            
        </Container>
      </div>
    </div>
  );
};

export default EventComponent;
