import React from 'react';
import {Container} from 'react-bootstrap';


export const Layout = (props)=>(
      
      <Container>
          {props.children}
          
      <div className="wpb_text_column wpb_content_element ">
      

      <div className="wpb_wrapper">


        <section id="section-1" className="aboutheading" data-aos="fade-left" data-aos-delay="200">
        <h1>About me:</h1>
        <p>Hi, iam <a href="/">Venkatesh.R </a>,
              Landscape Photographer and web developer<br/> Interested in Photography:) </p>
      </section>
      <section id="section-1" className="aboutheading" data-aos="fade-right" data-aos-delay="200">
        <h1>About Portfolio :</h1>
        <p>" This portfolio doesn't perform any user interaction :)  "<br/>
        This portfolio is just to view the picture's (My Gallery), which captured through a smartphone,
            This portfolio is developed and maintained by myself.</p>
      </section>

        
		</div>
    </div>
	
       
    </Container>
)