import React from "react";
import "./banner.css";
import { Row, Col } from "reactstrap";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

export const Banner = (props) => {
  return (
    <>
      <Fade arrows={false} duration={2000} easing="linear" autoplay={true}>
        {props.bannerData?.banner?.map((ele, index) => {
          return (
            <>
              <div className="m-0 d-none d-md-block">
                <Row
                  className="banner-wrapper d-flex align-items-center vh-100 w-100 m-0"
                  key={index}
                >
                  <h1 className="over-title">{props?.bannerData?.data?.title}</h1>

                  <Col
                    xl={6}
                    lg={6}
                    md={6}
                    sm={12}
                    className="banner-outter-lf p-0"
                  >
                    <div
                      className="banner-inner-lf "
                      
                    >
                      <section className="banner-inner-lfp">
                        <h2 className="heading_h2">{ele?.title}</h2>
                        <p>{ele.description}</p>
                      </section>
                    </div>
                  </Col>
                  <Col xl={6} lg={6} md={6} sm={12} className="p-0">
                    <div className="banner-inner-rt w-100">
                      <img
                        src={ele?.image}
                        alt={ele?.title || ""}
                        className="w-100"
                      />

                      {/* <p>{ele?.description}</p> */}
                    </div>
                  </Col>
                </Row>
              </div>

              <div className="d-md-none mobile-banner-wrapper">
                <div
                  className="m-banner-contents"
                  style={{
                    backgroundImage: `url(${ele.image})`,
                  }}
                >
                  <h1 className="over-title">{ele?.title}</h1>
                </div>
                

                <div className="m-banner-inner">
                  <section className="banner-inner-lfp">
                        <h2 className="heading_h2">{ele?.title}</h2>
                        <p>{ele.description}</p>
                      </section>
                  </div>
              </div>
            </>
          );
        })}
      </Fade>
    </>
  );
};
