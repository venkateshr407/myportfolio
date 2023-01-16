import React from "react";

export const SkillsetComp = (props) => {

  return (
    <div className="skills" data-aos="fade-up">
      <h2 className="header2">
        <i className="fa fa-laptop"></i> Skillset
      </h2>
      <section className="studied2 grid-skills">
        <div className="grid-skill">
          <h3>DEVELOPMENT</h3>
          <br />
          <ul className="skillset-list">
            {props.data?.skills?.map((ele, index) => {
              return (
                <li key={index}>{ele.skillName}</li>
              )
            })}
          </ul>
        </div>
        <div className="grid-skill">
          <h3>PHOTOGRAPHY & MOTION</h3>
          <br />
          <ul className="skillset-list">
            <li>Abode Lightroom</li>
            <li>Abode Premiere pro</li>
            <li>Abode After Effects</li>
          </ul>
        </div>
        <div className="grid-skill">
          <h3>DESIGN</h3>
          <br />
          <ul className="skillset-list">
            <li>Abode XD</li>
            <li>Figma</li>
          </ul>
        </div>
        <div className="grid-skill">
          <h3>TECH COURSE</h3>
          <br />
          <ul className="skillset-list">
            <li>Frontend Web Development Programme (Access)</li>
          </ul>
        </div>
      </section>
    </div>
  );
};
