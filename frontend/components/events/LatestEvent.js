/* eslint-disable */
import React from "react";
import { Row, Col, Container, Card, CardBody,Spinner } from "reactstrap";

import Image from "next/image";
import img1 from "../../assets/images/homeImage/isebg.jpg";

import { useQuery, gql } from "@apollo/client";

import Moment from 'react-moment';
import Link from "next/dist/client/link";

// Import Swiper React components
import { Swiper, SwiperSlide} from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import "swiper/css/navigation";
import EventCard from "./EventCard";



// import Swiper core and required modules
import SwiperCore, {
  Navigation
} from 'swiper';

// install Swiper modules
SwiperCore.use([Navigation]);

const EVENTS_QUERY = gql`
{
  events(orderBy: { createdAt: Desc }){
        title
        startDate
        endDate
        venue
        id
        img
        createdAt
      }
  }
`;

const LatestEvent = () => {

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
                  <h2 className="title" >Latest Events</h2>
                </Col>

    
                 <Swiper
                  spaceBetween={50}
                  slidesPerView={3}
                  navigation={true}
                  onSlideChange={() => console.log('slide change')}
                  onSwiper={(swiper) => console.log(swiper)}
                >
                {data.events.map((event) => (
                  <SwiperSlide key={event.id}>
                    <EventCard event={event} />
                  </SwiperSlide>
                ))}
    </Swiper>
              </Row>

        
            
            
        </Container>
      </div>
    </div>
  );
};

export default LatestEvent;
