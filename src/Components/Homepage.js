        import React from 'react';
        import Button from "@material-ui/core/Button";
        import theImage2 from '../images/venky.jpg';
        import Image from 'react-bootstrap/Image';
        import { Container,Row,Col} from 'reactstrap';
        
        
        export default function Homepage() {
            return (
                <div >
                    <main>
                
                    <section class="site-title">
                        <div class="site-background">
                            <h1>Venkatesh.R</h1> 
                            <p className="para">Student, Landscape photographer & Web developer
                            </p>
                            {/* <Button className="containers"  variant="contained" color="primary" href="#na" >
            Profile
            </Button>  */}
           
            <div className="media">
                <ul>
                    <li><a href="https://instagram.com/venky__creations/"><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
                    <li><a href="https://github.com/venkateshr407"><i class="fa fa-github" aria-hidden="true"></i></a></li>
                    <li><a href="https://www.linkedin.com/in/venkatesh-r-0571a4178"><i class="fa fa-linkedin" aria-hidden="true"></i></a></li>
                </ul>
            </div>
         
                        </div>
                        
                    </section>
                    
                    </main>
             <div class="content" >
                <section className="container">
                    <div class="site-content">
                        <div class="posts">
                            <div class="post-image">
                                <div>
                            
                            </div>
                        
                            </div>
                        </div>
                        
                    </div>
                
        </section>
            
                </div>

                <div class="container" >
        
            <div class="row" id="na" >
            <div class="col-md-9" data-aos="fade-up-left" data-aos-delay="200">
                <Container fluid flex>
            <Row>
            {/* <Col fluid xs={8} md={6}> */}
            
            <Image src={theImage2} roundedCircle width="270px"/>
            {/* </Col> */}
        </Row>
        </Container>
        <br/>
                <h1 className="animated fadeIn" >Venkatesh.R</h1>
                <p className="para">Student, Landscape photographer Web designer and UI designer </p>
                <p><a class="btn btn-secondary" href="#section-1" role="button">View details »</a></p>
            </div>
            </div>
                </div>

  <br/>
  <br/>
  <br/>
    <div className="wpb_wrapper">
        <section className="info" id="section-1">
            <h1 class="hyper" data-aos="fade-right" data-aos-delay="200">About me:</h1>
                <spam class="words"  data-aos="fade-right" data-aos-delay="200" >Hi! I'm Venkatesh.R, I am an landscape photographer currently living in Ramanagara, Karnataka, India.
               <br/> Interested in Photography, Web development & UI design.</spam>
                <br/>
                    <br/>
                        <h1 class="hyper" data-aos="fade-right" data-aos-delay="200">Education:</h1>
    
                            <span class="words"  data-aos="fade-right" data-aos-delay="200">Diploma in Computer Science & Engineering Academic year: 2013-2016</span>
                                <h4 className="educ"  data-aos="fade-right" data-aos-delay="200">Shantiniketan Polytechnic College, Ramanagara.</h4>
                                <br/>
                                <span class="words"  data-aos="fade-right" data-aos-delay="200">BE in Computer Science & Engineering. Academic year: 2017-2020</span>
                                <h4 className="educ"  data-aos="fade-right" data-aos-delay="200">Ghousia College of Engineering, Ramanagara.</h4>
                                <br/>
                                <h1 class="hyper" data-aos="fade-right" data-aos-delay="200">Skills:</h1>
                                {/* <span class="words"> */}
                                    <ul className="unlisted"  data-aos="fade-right" data-aos-delay="200">
                                        <li>C & C++.</li>
                                        <li>Java.</li>
                                        <li>Python.</li> 
                                        <li>html5, CSS3, Bootstrap, JavaScript & ReactJS.</li>
                                        <li>UI design based on adobe XD & Figma.</li>
                                        <li>Adobe AfterEffects & premiere pro CC.</li>
                                        <li>Adobe lightroom.</li>
                                    </ul>
                                </section>
                                
                                
                                <footer class="footer">
                                    <div class="container">
                                        <div class="contact" data-aos="zoom-in-down" data-aos-delay="200">
                                            <h2 >Contact</h2>
                                            <p class="footpara"> Mail: <a href="mailto:venkateshr590@gmail.com">venkateshr590@gmail.com</a></p>
                                            <p class="footpara"> Phone: +91 7795713898</p>
                                            </div>
                                            <div class="gallery" data-aos="zoom-in" data-aos-delay="200">
                                                <h2 >Gallery</h2>
                                                <p>
                                                    Here we go! For some landscape photography -><a href="/home">Click me</a>
                                                </p>
                                                
                                            </div>
                                            <div class="addr" data-aos="zoom-in-down" data-aos-delay="200">
                                                <h2>Address</h2>
                                                <p class="addrpara">Konkani Doddi,Ramanagara dist, Karnataka, India, 562159</p>
                                            </div>
                                            <div class="follow" data-aos="zoom-in-down" data-aos-delay="200">
                                                <h2>Follow me</h2>
                                                <div class="icon"><ul>
                                                <li><a href="https://www.linkedin.com/in/venkatesh-r-0571a4178"><i class="fa fa-linkedin" aria-hidden="true"></i></a></li>
                                                <li><a href="https://github.com/venkateshr407"><i class="fa fa-github" aria-hidden="true"></i></a></li>
                                                <li><a href="https://instagram.com/venky__creations/"><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
                    
                                                 </ul>
                                                 </div>

                                            </div>
                                    
                                                    <div class="move-up">
                                                        <span><a class="btn" href="#"><i class="fa fa-arrow-circle-up fa-2x " aria-hidden="true"></i></a></span>
                                                    </div>
                                    </div>
                                    <br/>
                                    
                                    
                                </footer>
                            </div>
                        </div>                    
                                            
                )
        }


