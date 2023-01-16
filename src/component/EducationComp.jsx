import React from "react";

export const EducationComp = () => {
  return (
    <section className="grid-combo">
      <div className="skills" data-aos="fade-up">
        <h2 className="header2">
          <i className="fa fa-graduation-cap"></i> Education
        </h2>
        <section className="studied">
          <h2>Diploma in Computer Science & Engineering</h2>
          <p>
            Shantiniketan Polytechnic College, Ramanagara.
            <br />
            <span className="academy">2013-2016</span>
          </p>

          <h2>BE in Computer Science & Engineering</h2>
          <p>
            Ghousia College of Engineering, Ramanagara.
            <br />
            <span className="academy">2017-2020</span>
          </p>
        </section>
      </div>
      <div className="Achievements" data-aos="fade-up">
        <h2 className="header22">
          <i className="fa fa-laptop"></i> Achievement's
        </h2>
        <section className="achieved">
          <ul className="listed">
            <li>
              <p>
                Participated in{" "}
                <span className="inline">#Hacktoberfest 2019, 2020 </span> and
                won a <span className="inline">swag's</span> for submitting four
                pull request's and contributing to open source{" "}
                <span className="inline">github</span> project's.
              </p>
            </li>
            <li>
              <p>
                Workshop on{" "}
                <span className="inline">
                  Google Cloud study jam (GCP Essential){" "}
                </span>
                at RNSIT, Bangalore.
              </p>{" "}
            </li>
            <li>
              <p>
                Landscape photo is commented by{" "}
                <span className="inline">BBCEarth </span>social media.
              </p>
            </li>
          </ul>
        </section>
      </div>
    </section>
  );
};
