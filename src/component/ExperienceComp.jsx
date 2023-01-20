import React from "react";
import moment from "moment";
import NoImage from '../images/no-company.png';


export const ExperienceComp = (props) => {
  const handleOpenSite = (link) => {
    window.open(link, "_blank");
  };
  return (
    <section className="grid-combo">
      <div className="skills" data-aos="fade-up">
        <h2 className="header2">
          <i className="fa fa-graduation-cap"></i> EXPERIENCE
        </h2>
        {props?.data?.experiences
          ?.sort(
            (x, y) =>
    
              Date.parse(y?.startDate) - Date.parse(x?.startDate)
          )
          ?.map((ele, index) => {
            return (
              <div className="d-flex align-items-center " key={index}>
                <img
                  src={ele?.logo || NoImage}
                  className="company-logo cursor-pointer"
                  alt={ele?.companyName || ""}
                  onClick={() => handleOpenSite(ele?.companySite)}
                />
                <section className="studied">
                  <h2>{ele?.designation}</h2>
                  <p>
                    {ele?.companyName} - {ele?.position}
                    <br />
                    <span className="academy">
                      {moment(ele?.startDate).format("MMM YYYY")} -{" "}
                      {ele?.endDate === null
                        ? "Present"
                        : moment(ele?.endDate).format("MMM YYYY")},
                    </span>
                    <span  className="academy">{' '}{ele?.totalExp}</span>
                  </p>
                </section>
              </div>
            );
          })}
      </div>
    </section>
  );
};
