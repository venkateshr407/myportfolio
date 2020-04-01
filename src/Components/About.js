import React from 'react'
import styled from 'styled-components';
import Img from 'react-image';
import logo1 from '../images/Venky Creations_free-file (3).png';

import theImage from '../images/car.jpg';


export const Styles = styled.div`
.position-relative {
  background: url(${theImage}) no-repeat fixed bottom;
  background-size: cover;
  color:#fff;
  height: 100vh;
  position: relative;
  font-family: 'Montserrat', sans-serif;
font-size: 20px;
  z-index: -2;
}
.position-relative h1{
font-size: 20px;
} `

export default function About() {
  return (
    <div>
      <Styles>
      <div className=" animated fadeInDown position-relative overflow-hidden p-5  text-center bg-light"  >
  <div className="col-md-5 p-lg-5 mx-auto my-5">
    <h1 className=" animated fadeInRightBig display-6 font-weight-normal"><Img src={logo1} classname="logo1"></Img></h1>
    <p className=" animated fadeInLeftBig lead-4 font-weight-normal">Photographer</p>
    
    
  
 </div>
 </div>
</Styles>

    </div>
      
  )
}
