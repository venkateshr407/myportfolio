import React, { Component } from "react";
import Badge from "../Components/Badge";
import badge2019 from "../images/hacktoberfest01.png";
import badge2020 from "../images/hacktoberfestbadge2.png";
import badge from "../Components/badge.module.css";
import Project from "../Components/Project";
import vpix from "../images/vpix.png";
import vkeep from "../images/vkeep.png";
import giphy from "../images/giphy.png";
import countries from "../images/countries.png";
import AboutmeComp from "../component/AboutmeComp";
import LandingComp from "../component/LandingComp";
import { SkillsetComp } from "../component/SkillsetComp";
import { PhotographyComp } from "../component/PhotographyComp";
import { EducationComp } from "../component/EducationComp";
import { ExperienceComp } from "../component/ExperienceComp";

export default class Home extends Component {
  render() {
    return (
      <div className="all">
        <div className="display">
          <LandingComp  data={this.props.data}/>
          <div className="about" data-aos="fade-up">
            <h2 className="header2">About me</h2>
            <AboutmeComp />
            <SkillsetComp data={this.props.data} />
            <ExperienceComp  data={this.props.data}/>
            <EducationComp />
            {this.renderBadge()}
            {this.renderProject()}
            <PhotographyComp/>
          </div>
        </div>
      </div>
    );
  }
  renderBadge = () => {
    return (
      <div className="Achievements" data-aos="fade-up">
        <h2 className="header22">
          <i className="fa fa-certificate"></i> Badge's
        </h2>
        <div className={badge.main}>
          <Badge badges={badge2019} title="Hacktoberfest 2019 Badge" />
          <Badge badges={badge2020} title="Hacktoberfest 2020 Badge" />
        </div>
      </div>
    );
  };
  renderProject = () => {
    return (
      <div className="Achievements" data-aos="fade-up">
        <h2 className="header22">
          <i className="fa fa-terminal"></i> Project
        </h2>
        <div className={badge.main}>
          <Project
            BGImage={vpix}
            link="https://vpix.netlify.app/"
            title="Vpix is a website dedicated to sharing stock photography under the Unsplash API ."
          />
          <Project
            BGImage={vkeep}
            link="https://vkeep.herokuapp.com/"
            title="Vkeep To-Do app, built in reactJS"
          />
          <Project
            BGImage={giphy}
            link="https://giphyvolopay.herokuapp.com/"
            title="Real time gif's, using GIPHY API"
          />
          <Project
            BGImage={countries}
            link="https://countries-web.herokuapp.com/"
            title="Real time Countries data, React Hooks"
          />
        </div>
      </div>
    );
  };
}
