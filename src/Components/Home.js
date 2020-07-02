import React, { Component } from 'react'
import theImg from '../images/venky.jpg';
import theImg1 from '../images/metro-wholesale-img.jpg';
import theImg2 from '../images/sunset.jpg';
import theImg3 from '../images/travel.jpg';
import Typed from 'react-typed';
import CButton from '../component/clickable-button';
import Img from 'react-image';

export default class Home extends Component {
    render() {
        return (
            <div className="all">
                <div className="display">
                    <div className="landing-hero">
 
                        <div className="naming">
                            <h1 className="textheading">Hello World, I'm <span className="inlinetext">Venkatesh.R</span></h1>
                                <p className='subtitle'>
                                    <Typed
                                        strings={['Student','Landscape Photographer','Web Developer']}
                                        typeSpeed={40}
                                        backSpeed={20}
                                        loop={true}
                                    />
                                </p><br/>
                            <br/>
                     <CButton link={'mailto:venkateshr590@gmail.com'} text={'SEND A MESSAGE'}/>
                   
                    </div>
                </div>

               <div className="about" data-aos="fade-up">
                   <h2 className="header2">About me</h2>
                   <section className="grid-aboutme">
                       
                   <Img src={theImg} className="venky"/>
                
                
                        <p>My name is <span className="inlinetext">Venkatesh.R</span> ,
                             I describe my self as someone who's persistant, a <span className="inlinetext">quick learner</span> and <span className="inlinetext">loves problem solving</span> by using simple and scalable solutions.</p>
                   </section>
                <section className="doing" data-aos="fade-up">
                    <h2 className="header2"><i className="fa fa-laptop-code"></i>What i'm doing</h2>
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
                        <h2 className="header2"><i className="fa fa-laptop"></i>  Skillset</h2>
                        <section className="studied2 grid-skills">
                            <div className="grid-skill">
                                <h3>DEVELOPMENT</h3><br/>
                                <ul className="skillset-list">
                                    <li>HTML</li>
                                    <li>CSS</li>
                                    <li>Javascript</li>
                                    <li>React</li>
                                    <li>GIT</li>
                                </ul>
                            </div>
                            <div className="grid-skill">
                            <h3>PHOTOGRAPHY & MOTION</h3>
                            <br/>
                            <ul className="skillset-list">
                                <li>Abode Lightroom</li>
                                <li>Abode Premiere pro</li>
                                <li>Abode After Effects</li>
                            </ul>
                        </div>
                        <div className="grid-skill">
                            <h3>DESIGN</h3><br/>
                            <ul className="skillset-list">
                                <li>Abode XD</li>
                                <li>Figma</li>
                            </ul>
                        </div>
                        <div className="grid-skill">
                            <h3>TRAING COURSE</h3><br/>
                            <ul className="skillset-list">
                                <li>Web development</li>
                                <li>Java full stack</li>
                            </ul>
                        </div>
                        </section>
                    </div>

                    
    
                    <section className="grid-combo">
                    <div className="skills" data-aos="fade-up">
                        <h2 className="header2"><i className="fa fa-graduation-cap"></i>  Education</h2>
                        <section className="studied">
                            <h2>Diploma in Computer Science & Engineering</h2>
                            <p>Shantiniketan Polytechnic College, Ramanagara.<br/><span className="academy">2013-2016</span></p>
                            
                            <h2>BE in Computer Science & Engineering</h2>
                            <p>Ghousia College of Engineering, Ramanagara.<br/><span className="academy">2017-2020</span></p>
                        
                        </section>
                    </div>
                    <div className="Achievements" data-aos="fade-up">
                        <h2 className="header22"><i className="fa fa-laptop"></i> Achievement's</h2>
                        <section className="achieved">
                                <ul className="listed">
                                    <li><p>Participated in <span className="inline">#Hacktoberfest 2019</span> and won a <span className="inline">swag's</span> for submitting four pull request's and contributing to open source <span className="inline">github</span> project's.</p></li>
                                    <li><p>Workshop on <span className="inline">Google Cloud study jam (GCP Essential) </span>at RNSIT, Bangalore.</p> </li>
                                    <li><p>Landscape photo is commented by <span className="inline">BBCEarth </span>social media.</p></li>
                                </ul>
                        </section>
                    </div>
                    </section>
                    <div className="waytogallery" data-aos="fade-up"><h2 className="header222"><i className="fa fa-camera"></i> Photography</h2>
                    <p>categorie's of Photography !</p>
                    </div>
                    <section className="wayforgall">
                    <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                <img className="d-block w-100 h-75" src={theImg3} alt="First slide"/>
                                
                                <div className="carousel-caption text-left">
                                    <h3>Travel Photography</h3>

                                    <p>for more visit :  <a className="btn btn-outline-primary" href="/gallery" role="button">Gallery</a></p>
                                </div>
                                </div>
                                <div className="carousel-item">
                                <img className="d-block w-100 h-75" src={theImg1} alt="Second slide"/>
                                <div className="carousel-caption text-left">
                                    <h3>Marketing Photography</h3>
                                    <p>for more visit :  <a className="btn btn-outline-danger" href="/gallery" role="button">Gallery</a></p>
                                </div>
                                </div>
                                <div className="carousel-item">
                                <img className="d-block w-100 h-75" src={theImg2} alt="Third slide"/>
                                <div className="carousel-caption text-left">
                                    <h3>Landscape Photography</h3>
                                    <p>for more visit :  <a className="btn btn-outline-warning" href="/gallery" role="button">Gallery</a></p>
                                </div>
                                </div>
                            </div>
                            <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="sr-only">Previous</span>
                            </a>
                            <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="sr-only">Next</span>
                            </a>
                            </div>
                    </section>
                   
                  
 
    
            </div>
            </div>
            </div>
            
            
            
        )
    }
}
