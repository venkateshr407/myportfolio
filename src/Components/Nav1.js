import React from 'react'
import {Nav, Navbar} from 'react-bootstrap';
import styled from 'styled-components';


const Styles = styled.div `
.navbar{
  background-color: #444;
}
.navbar-brand, .navbar-nav .nav-link{
  color: white;
  &:hover{
    color:white;
  }
`;

 const Nav1 = () =>(
  <Styles>
   
    <Navbar expand="navbar navbar-expand-lg navbar-dark bg-dark">
      <Navbar.Brand href="/"> Venky Creations</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbar navbar-expand-lg navbar-light bg-light"/>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
        <Nav.Item><Nav.Link href="/about">About</Nav.Link></Nav.Item>
          <Nav.Item><Nav.Link href="/home">My gallery</Nav.Link></Nav.Item>
          
          <Nav.Item><Nav.Link href="https://www.picxy.com/venky__creations/">Picxy</Nav.Link></Nav.Item>
        </Nav>
      </Navbar.Collapse>
      </Navbar>
      
</Styles>

)
export default Nav1;

