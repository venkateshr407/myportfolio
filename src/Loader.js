import React, { useEffect, useState } from "react";
import { FadeText } from "./Common/FadeText/FadeText";

function Loader() {
  const [moreTime, setTime] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setTime(true);
    }, 5000);
  }, []);

  return (
    <>
      <div className="loader-container">
        <div className="loaderNew">
          <div className="dots"></div>
          <div className="dots"></div>
          <div className="dots"></div>
          <div className="dots"></div>
        </div>
        {moreTime ? <FadeText /> : null}
      </div>
    </>
  );
}

export default Loader;
