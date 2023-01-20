import React from "react";
import "./landing.css";
export const Landing = (props) => {
  return (
    <div className="l-wrapper">
      {props.data?.featured?.map((ele, index) => {
        return (
          <div key={index}>
            <div className="l-img-c">
              <img src={ele.image} alt={ele.title || ""} />
            </div>
            <div className="l-t-c">
              <h2>{ele?.title}</h2>
            </div>
          </div>
        );
      })}
    </div>
  );
};
