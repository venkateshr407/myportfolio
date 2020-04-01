import React from 'react'
import {Nav, Navbar} from 'react-bootstrap';
import styled from 'styled-components';
import logo from '../images/VENKY CREATIONS_free-file (1).png';
import Img from 'react-image';

const Styles = styled.div `
.navbar{
  background-color: white;
}
.navbar-brand, .navbar-nav .nav-link{
  color: white;
  margin:0;
  &:hover{
    color:white;
  }
`;

 const Nav1 = () =>(
  <Styles>
   
    <Navbar expand="navbar navbar-expand-lg navbar-dark bg-dark">
      <Navbar.Brand href="/"><Img src={logo} className="logo"/></Navbar.Brand>
      <Navbar.Toggle aria-controls="navbar navbar-expand-lg navbar-light bg-light"/>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
        <Nav.Item><Nav.Link href="/about">About</Nav.Link></Nav.Item>
          <Nav.Item><Nav.Link href="/home">Gallery</Nav.Link></Nav.Item>
          
          <Nav.Item><Nav.Link href="https://www.picxy.com/venky__creations/">Picxy</Nav.Link></Nav.Item>
        </Nav>
      </Navbar.Collapse>
      </Navbar>
      
</Styles>

)
export default Nav1;

