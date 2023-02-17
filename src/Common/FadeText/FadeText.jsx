import React, { useEffect, useState } from "react";
import "./styles.css";

const fadeData = [
  {
    type: "Takes more then usual...",
  },
  {
    type: "Almost there...!",
  },
];

export const FadeText = () => {
  const [fIndex, setIndex] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setIndex((prevState) =>
        prevState === fadeData.length - 1 ? 0 : prevState + 1
      );
    }, 11000);
  }, [fIndex]);

  return (
    <div className="fade-container">
      {fadeData?.map((element, index) => {
        return (
          <div className={index !== fIndex ? "fadeout" : "fadein"} key={index}>
            <p>
              {index === fIndex
                ? element.type
                : ""}
            </p>
          </div>
        );
      })}
    </div>
  );
};
