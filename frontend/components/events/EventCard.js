/* eslint-disable */
import React from "react";
import { Row, Col, Container, Card, CardBody,Spinner } from "reactstrap";

import Image from "next/image";
import img1 from "../../assets/images/homeImage/isebg.jpg";

import { useQuery, gql } from "@apollo/client";

import Moment from 'react-moment';
import Link from "next/dist/client/link";



const EventCard = (props) => {
return (
 
                  <Card className="card-shadow">
                    <a  className="img-ho">
                      <Link href={`events/${props.event.id}`}>
                      <img
                        className="card-img-top"
                        height={300}
                        style={{
                          objectFit: "cover",
                        }}
                        src={props.event.img ? props.event.img : img1}
                      />
                      </Link>
                    </a>
                    <CardBody>
                      <h5 className="font-medium m-b-0">
                      {props.event.title}
                      </h5>
                      <p className="m-b-0 font-14">
                        Start Date - <Moment format="DD/MM/YYYY h:mm a" >{props.event.startDate}</Moment></p>
                    </CardBody>
                  </Card>
                
  );
};

export default EventCard;
