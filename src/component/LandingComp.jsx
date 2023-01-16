import React from "react";
import Typed from "react-typed";
import CButton from "../component/clickable-button";

const LandingComp = (props) => {
  let types = props?.data?.types?.flatMap((ele) => {
    let arr = [];
    arr.push(ele?.type);
   return arr;
  })
  return (
    <div className="landing-hero">
      <div className="naming">
        <h1 className="textheading">
          Hey, I'm <br /> <span className="inlinetext">{props?.data?.name}</span>
        </h1>
        <p className="subtitle">
          <Typed
            strings={types}
            typeSpeed={40}
            backSpeed={20}
            loop={true}
          />
        </p>
        <br />
        <br />
        <CButton
          link={"mailto:venkateshr590@gmail.com"}
          text={"SEND A MESSAGE"}
        />
      </div>
    </div>
  );
};

export default LandingComp;
