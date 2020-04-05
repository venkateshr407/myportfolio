import React from 'react';
import {Jumbotron as Jumbo,Container} from 'react-bootstrap';

import theImage from '../images/intropiccopy.jpg';



import styled from 'styled-components';

const Styles = styled.div`
.jumbo {
  background: url(${theImage}) no-repeat fixed bottom;
  background-size: cover;
  color:#fff;
  height: 500px;
  position: relative;
  z-index: -2;
  font-family: 'Catamaran', sans-serif;
}
.overley{
  background-color:#000;
  opacity:0-10;
  position: absolute;
   top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: -1; 
  animation-delay: 3s;
  animation-duration: 3s;
  animation-iteration-count: 1;
  font-family: 'Montserrat', sans-serif;
  font-weight: 900;
}
.bcc{
  font-family: 'Montserrat', sans-serif;
  font-weight: 900;
} `
 const Jumbotron = () => (
   <Styles>
     <Jumbo fluid className="jumbo" data-aos="zoom-in" data-aos-delay="200">
       <div className="animated fadeInUpBig overlay  col-md-8">
         <Container className="fontforintro" data-aos="fade-up-left" data-aos-delay="200"><h1>Welcome</h1>
         <p className="bbc">@bbcearth: Hi there, We love this photo and we were wondering if we could use it for BBC Earth social,website or digital ? 
         </p>

         </Container>
       
       </div>
     </Jumbo>
   </Styles>
 )

export default Jumbotron;