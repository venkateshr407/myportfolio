import React from "react";
import theImg1 from "../images/metro-wholesale-img.jpg";
import theImg2 from "../images/sunset.jpg";
import theImg3 from "../images/travel.jpg";

export const PhotographyComp = () => {
  return (
    <>
      <div className="waytogallery" data-aos="fade-up">
        <h2 className="header222">
          <i className="fa fa-camera"></i> Photography
        </h2>
        <p>categorie's of Photography !</p>
      </div>
      <section className="wayforgall">
        <div
          id="carouselExampleControls"
          className="carousel slide"
          data-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                className="d-block w-100 h-75"
                src={theImg3}
                alt="First slide"
              />

              <div className="carousel-caption text-left">
                <h3>Travel Photography</h3>

                <p>
                  for more visit :{" "}
                  <a
                    className="btn btn-outline-primary"
                    href="/gallery"
                    role="button"
                  >
                    Gallery
                  </a>
                </p>
              </div>
            </div>
            <div className="carousel-item">
              <img
                className="d-block w-100 h-75"
                src={theImg1}
                alt="Second slide"
              />
              <div className="carousel-caption text-left">
                <h3>Marketing Photography</h3>
                <p>
                  for more visit :{" "}
                  <a
                    className="btn btn-outline-danger"
                    href="/gallery"
                    role="button"
                  >
                    Gallery
                  </a>
                </p>
              </div>
            </div>
            <div className="carousel-item">
              <img
                className="d-block w-100 h-75"
                src={theImg2}
                alt="Third slide"
              />
              <div className="carousel-caption text-left">
                <h3>Landscape Photography</h3>
                <p>
                  for more visit :{" "}
                  <a
                    className="btn btn-outline-warning"
                    href="/gallery"
                    role="button"
                  >
                    Gallery
                  </a>
                </p>
              </div>
            </div>
          </div>
          <a
            className="carousel-control-prev"
            href="#carouselExampleControls"
            role="button"
            data-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#carouselExampleControls"
            role="button"
            data-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </section>
    </>
  );
};
