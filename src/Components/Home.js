import React, { Component } from 'react'
import theImg from '../images/venky.jpg';
import theImg1 from '../images/metro-wholesale.jpg';
import theImg2 from '../images/sundown.jpg';
import theImg3 from '../images/car.jpg';
import theImg4 from '../images/hole.jpg';
// import theImg5 from '../images/map.png';

export default class Home extends Component {
    render() {
        return (
            <div className="all">
            <div className="display">
                <div className="mainheading">
               <div className="container-main">
                   <img src={theImg} className="venky"/>
               </div>
               <div className="introtext">
                   <h1><span className="intropara">Hello there,i'm 
                   <br/></span> VENKATESH.R</h1>
                   <h3 className="introheader">Landscape photographer & Web developer</h3>
               </div>
               
               <div className="media">
                <ul>
                    <li><a href="https://instagram.com/venky__creations/"><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
                    <li><a href="https://github.com/venkateshr407"><i class="fa fa-github" aria-hidden="true"></i></a></li>
                    <li><a href="https://www.linkedin.com/in/venkatesh-r-0571a4178"><i class="fa fa-linkedin" aria-hidden="true"></i></a></li>
                </ul>
            </div>
            </div>
               <div className="about" data-aos="fade-up">
                   <h2 className="header2">About me</h2>
                        <p>I describe my self as someone who's persistant, a quick learner and loves problem solving by using simple and scalable solutions.</p>
                <section className="doing" data-aos="fade-up">
                    <h2 className="header2"><i class="fa fa-laptop-code"></i>What i'm doing</h2>
                   <div className="wrapper">
                        <div className="box" data-aos="fade-up"><h3><span className="boxspan">Web development:</span> Able to create beautiful sites by using 
HTML, CSS, Javascript and React.</h3></div>
                        <div className="box" data-aos="fade-up"><h3><span className="boxspan">Responsive design:</span> Able to create mobile responsive sites 
at a professional level.</h3></div>
                        <div className="box" data-aos="fade-up"><h3><span className="boxspan">UI design:</span> based on the Abode XD & Figma.</h3></div>
                        <div className="box" data-aos="fade-up"><h3><span className="boxspan">Photography in Landscape:</span> capturing amazing Landscape photo's.</h3></div>
                    </div> 
                    </section>
                   
                    <div className="skills" data-aos="fade-up">
                        <h2 className="header2"><i class="fa fa-laptop"></i>  Skillset</h2>
                        <section className="studied grid-skills">
                            <div className="grid-skill">
                                <h2>DEVELOPMENT</h2><br/>
                                <ul className="skillset-list">
                                    <li>HTML</li>
                                    <li>CSS</li>
                                    <li>Javascript</li>
                                    <li>React</li>
                                    <li>GIT</li>
                                </ul>
                            </div>
                            <div className="grid-skill">
                            <h2>PHOTOGRAPHY & MOTION</h2>
                            <br/>
                            <ul className="skillset-list">
                                <li>Abode Lightroom</li>
                                <li>Abode Premiere pro</li>
                                <li>Abode After Effects</li>
                            </ul>
                        </div>
                        <div className="grid-skill">
                            <h2>DESIGN</h2><br/>
                            <ul className="skillset-list">
                                <li>Abode XD</li>
                                <li>Figma</li>
                            </ul>
                        </div>
                        <div className="grid-skill">
                            <h2>TRAING COURSE</h2><br/>
                            <ul className="skillset-list">
                                <li>Web development</li>
                                <li>Java full stack</li>
                            </ul>
                        </div>
                        </section>
                    </div>

                    
    
                    <section className="grid-combo">
                    <div className="skills" data-aos="fade-up">
                        <h2 className="header2"><i class="fa fa-graduation-cap"></i>  Education</h2>
                        <section className="studied">
                            <h2>Diploma in Computer Science & Engineering</h2>
                            <p>Shantiniketan Polytechnic College, Ramanagara.<br/><span className="academy">2013-2016</span></p>
                            
                            <h2>BE in Computer Science & Engineering</h2>
                            <p>Ghousia College of Engineering, Ramanagara.<br/><span className="academy">2017-2020</span></p>
                        
                        </section>
                    </div>
                    <div className="Achievements" data-aos="fade-up">
                        <h2 className="header22"><i class="fa fa-laptop"></i> Achievement's</h2>
                        <section className="achieved">
                                <ul className="listed">
                                    <li><p>Participated in <span className="inline">#Hacktoberfest 2019</span> and won a <span className="inline">swag's</span> for submitting four pull request's and contributing to open source <span className="inline">github</span> project's.</p></li>
                                    <li><p>Workshop on <span className="inline">Google Cloud study jam (GCP Essential) </span>at RNSIT, Bangalore.</p> </li>
                                    <li><p>Landscape photo is commented by <span className="inline">BBCEarth </span>socal media.</p></li>
                                </ul>
                        </section>
                    </div>
                    </section>
                    <div className="waytogallery" data-aos="fade-up"><h2 className="header222"><i class="fa fa-camera"></i> Photography</h2>
                    <p>categorie's of Photography !</p>
                       <div className="grid-container">
                           <div className="pic">
                               <img src={theImg1} className="image" />
                           <div class="text-block">
                                <h4>Marketing</h4>
                                <p>Metro-wholesale</p>
                            </div>
                           </div>
                           <div className="pic"><img src={theImg2} className="image" />  <div class="text-block">
                                <h4>Landscape</h4>
                                <p>Sunset</p>
                            </div></div>
                           <div className="pic"><img src={theImg3} className="image" />  <div class="text-block">
                                <h4>Travelling</h4>
                                <p>Roadways</p>
                            </div></div>
                           <div className="pic"><a href="/home"><img src={theImg4} className="imagelink" value="for more" /> </a>  <div class="text-block">
                                <h4>For more</h4>
                                <p>Click here this image !</p>
                            </div>
                        </div>

                       </div>
                        
                   </div>
                   <div className="contact" data-aos="fade-up">
                    <h2 className="header2"><i class="fa fa-address-card"></i> Contact</h2>
                    {/* <img src={theImg5} className="map" /> */}
                    <section className="contacts">
                        <div className="icons">
                            <h3 className="header3"><h5><i class="fa fa-paper-plane"></i> <span className="inline1">  E-mail :</span><a href="mailto:venkateshr590@gmail.com">  venkateshr590@gmail.com</a></h5></h3></div>
                        <div className="icons">
                            <h3 className="header3"><h5><i class="fa fa-phone"></i><span className="inline1"> Phone :</span> +91 77957 13898 </h5></h3></div>
                        <div className="icons">
                            <h3 className="header3"><h5><i class="fa fa-map-marker"></i>  <span className="inline1">  Address :</span>   Konkani Doddi, Ramanagara, Karnataka 562159.</h5></h3></div>
                    </section>
                </div>
    
                   </div>
            </div>
            </div>
            
            
        )
    }
}
