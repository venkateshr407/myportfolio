import React from 'react';
import {Container} from 'react-bootstrap';


export const Layout = (props)=>(
      
      <Container>
          {props.children}
          
      <div className="wpb_text_column wpb_content_element ">
      

      <div className="wpb_wrapper">


        <section id="section-1" className="about p-4 my-3" data-aos="fade-left" data-aos-delay="200">
        <h1>About me:</h1>
        <p>Hi, iam Venkatesh.R ,
              Landscape Photographer and web developer<br/> Interested in Photography:) </p>
      </section>
      <section id="section-1" className="about bg-faded p-5 my-3" data-aos="fade-right" data-aos-delay="200">
        <h1>About Website :</h1>
        <p>"This Website doesn't perform any user interaction :)  "<br/>
        This website is just to view the picures (My Gallery), which captured through a smartphone,
            This website is developed and maintained by myself.</p>
      </section>
      <section id="section-1" className="about bg-faded p-5 my-3" data-aos="fade-left" data-aos-delay="200">
        <h1>For use:</h1>
        <p>The website is designed to my personal use </p>
      </section>
        
		</div>
    </div>
	
       
    </Container>
)