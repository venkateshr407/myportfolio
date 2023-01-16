import React from "react";
import Img from "react-image";
import theImg from "../images/venky.jpg";


const AboutmeComp = () => {
  return (
    <>
      <section className="grid-aboutme">
        <Img src={theImg} className="venky" />
        <p>
          My name is <span className="inlinetext">Venkatesh.R</span> , I
          describe my self as someone who's persistant, a{" "}
          <span className="inlinetext">quick learner</span> and{" "}
          <span className="inlinetext">loves problem solving</span> by using
          simple and scalable solutions.
        </p>
      </section>
      <section className="doing" data-aos="fade-up">
        <h2 className="header2">
          <i className="fa fa-laptop-code"></i>What i'm doing
        </h2>
        <div className="wrapper">
          <div className="box" data-aos="fade-up">
            <h3>
              <span className="boxspan">Web development:</span> Able to create
              beautiful sites by using HTML, CSS, Javascript and React.
            </h3>
          </div>
          <div className="box" data-aos="fade-up">
            <h3>
              <span className="boxspan">Responsive design:</span> Able to create
              mobile responsive sites at a professional level.
            </h3>
          </div>
          <div className="box" data-aos="fade-up">
            <h3>
              <span className="boxspan">UI design:</span> based on the Abode XD
              & Figma.
            </h3>
          </div>
          <div className="box" data-aos="fade-up">
            <h3>
              <span className="boxspan">Photography in Landscape:</span>{" "}
              capturing amazing Landscape photo's.
            </h3>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutmeComp;
