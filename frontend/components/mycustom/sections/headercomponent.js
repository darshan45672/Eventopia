/* eslint-disable */
import React, { useState } from "react";
import {
  Row,
  Col,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Container,
  NavbarBrand,
  Navbar,
  Nav,
  NavItem,
  NavLink,
  NavbarToggler,
  Collapse,
} from "reactstrap";
import Image from "next/image";
import logo from "../../../assets/images/logos/green-logo.png";
import logo2 from "../../../assets/images/1.png";
import image from "next/image";

import Link from 'next/link'


import {signOut, useSession } from 'next-auth/react'



const HeaderComponent = () => {
  const [isOpen, setIsOpen] = useState(false);

  const { data: session, status } = useSession()
  
  const toggle = () => setIsOpen(!isOpen);
  return (
    <div id="section">
      <div className="header1 po-relative shadow-lg" style={{
        backgroundColor: "#ee7001",
        
      }}>
        <Container>
          <Navbar className="navbar-expand-lg h2-nav">
          <Link href="/">
            <NavbarBrand>
              <Image href="" src={logo2} alt="wrapkit" width="200"
              height="30"/>
            </NavbarBrand>
            </Link>
            <NavbarToggler onClick={toggle}>
              <span className="ti-menu text-white"></span>
            </NavbarToggler>
            <Collapse isOpen={isOpen} navbar id="header1">
              <Nav navbar className="ml-auto mt-2 mt-lg-0">
            
              
                <Link href="/">
                <NavItem>
                  <NavLink >Home</NavLink>
                </NavItem>
                </Link>
                <Link href="/about">
                <NavItem>
                  <NavLink >About</NavLink>
                </NavItem>
                </Link>
                <Link href="/branches">
                <NavItem>
                  <NavLink >Branch</NavLink>
                </NavItem>
                </Link>
                <Link href="/events">
                <NavItem>
                  <NavLink >Events</NavLink>
                </NavItem>
                </Link>
               
              
                { status === "authenticated" ? 
                
            
                <>
                <Link href="/profile">
                <NavItem>
                <a className="btn btn-dark">
              PROFILE
                </a>
                </NavItem>
                </Link>
                <NavItem>
                <a className="btn btn-info" onClick={() => signOut()}>
              LOG OUT 
                </a>
                </NavItem>
                </>
                
                : 
                
                <Link href="/login">
                <NavItem>
                <a className="btn btn-info" >
              LOG IN
                </a>
                
              </NavItem>
                  </Link>
                
                
                
                
                
                }
                
               
              </Nav>
            </Collapse>
          </Navbar>
        </Container>
      </div>
    </div>
  );
};

export default HeaderComponent;
