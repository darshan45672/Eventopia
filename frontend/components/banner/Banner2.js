import React from "react";
import Link from "next/link";
import { Container, Row, Col,Ratio } from "reactstrap";
import Image from "next/image";
import logo from "../../assets/images/1.png";


const Banner2 = () => {
  return (

    
    <div className="static-slider-head banner2">


    <div className="overlay"></div>
    <video playsinline="playsinline" autoplay="autoplay" muted="muted" loop="loop" className="header-video">
      <source src="event.mp4" type="video/mp4"></source>
    </video>
    



  <div class="overlay"></div>

  <video playsinline="playsinline" autoplay="autoplay" muted="muted" loop="loop">
  <source src="https://gigikart.com/pexels.mp4" type="video/mp4"></source>
  </video>

  <div class="container h-100 video-text">
    <div class="d-flex h-100 text-center align-items-center">
      <div class="w-100 text-white">
        <h1 class="display-3 text-white">
          {/* <img src={logo} alt="logo" className="img-fluid" /> */}
          <Image src={logo} alt="wrapkit" 
              height="" width=""/>
        </h1>
        <p class="lead mb-0" style={{
          fontFamily: "system-ui",
        }}>Unlock the Ultimate Event Experience with Seamless Registration.</p>
      </div>
    </div>
  </div>

  </div>
  );
};

export default Banner2;
