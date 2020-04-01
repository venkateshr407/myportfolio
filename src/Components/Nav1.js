import React from 'react'
import {Nav, Navbar} from 'react-bootstrap';
import styled from 'styled-components';
import logo from '../images/Venky Creations_free-file (3).png';
import Img from 'react-image';

const Styles = styled.div `
.navbar{
  background-color: rgb(8, 5, 24)
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
   
    <Navbar expand="navbar navbar-expand-lg navbar-dark bg">
      <Navbar.Brand href="/"><Img src={logo} className="logo"/></Navbar.Brand>
      <Navbar.Toggle aria-controls="navbar navbar-expand-lg navbar-light bg-light"/>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
        <Nav.Item><Nav.Link href="/about">About</Nav.Link></Nav.Item>
          <Nav.Item><Nav.Link href="/gallery">Gallery</Nav.Link></Nav.Item>
          
          <Nav.Item><Nav.Link href="https://www.picxy.com/venky__creations/">Picxy</Nav.Link></Nav.Item>
        </Nav>
      </Navbar.Collapse>
      </Navbar>
      
</Styles>

)
export default Nav1;

