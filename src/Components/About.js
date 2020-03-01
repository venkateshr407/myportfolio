import React from 'react'
import styled from 'styled-components';

import theImage from '../images/tricolor.jpg';


export const Styles = styled.div`
.position-relative {
  background: url(${theImage}) no-repeat fixed bottom;
  background-size: cover;
  color:#fff;
  height: 500px;
  position: relative;
  font-family: 'Caveat', cursive;
font-family: 'Kaushan Script', cursive;
font-family: 'Satisfy', cursive;
font-size: 20px;
  z-index: -2;
}
.position-relative h1{
font-size: 50px;
}`

export default function About() {
  return (
    <div>
      <Styles>
      <div className=" animated fadeInDown position-relative overflow-hidden p-5  text-center bg-light"  >
  <div className="col-md-5 p-lg-5 mx-auto my-5">
    <h1 className=" animated fadeInRightBig display-6 font-weight-normal">Venkatesh R</h1>
    <p className=" animated fadeInLeftBig lead-4 font-weight-normal">Landscape Photographer</p>
    
    
  
 </div>
 </div>
</Styles>

    </div>
      
  )
}
