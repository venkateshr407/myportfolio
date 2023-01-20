import React from "react";
import { Col, Container, Row } from "reactstrap";
import "./featured.css";
import Verfied from "../../../images/verified.png";

export const Featured = (props) => {
  return (
    <Container>
      <Row className="p-0 m-0 w-100 featured-wrapper mb-4">
        <Col xl={6} lg={6} md={6} sm={12} className="f-w-lf">
          <div className="f-c-lfI">
            <img
              className="w-100"
              src={props?.featuredData?.data?.bbc?.image}
              alt={props?.featuredData?.data?.bbc?.name || ""}
            />
          </div>
          <div className="f-c-lfC">
            <h2 className="d-none d-md-block">
              {props?.featuredData?.data?.bbc?.title}
            </h2>
            <h4 className="f-c-rfC d-md-none">
              {props?.featuredData?.data?.bbc?.name}
              <img src={Verfied} className="verifed-icon" alt="verfied" />
            </h4>
            <p>{props?.featuredData?.data?.bbc?.description}</p>
            <h2 className="d-md-none">
              {props?.featuredData?.data?.bbc?.title}
            </h2>
          </div>
        </Col>
        <Col xl={6} lg={6} md={6} sm={12} className="d-none d-md-block">
          <h2 className="f-c-rfC">
            {props?.featuredData?.data?.bbc?.name}
            <img src={Verfied} className="verifed-icon" alt="verfied" />
          </h2>
        </Col>
      </Row>
    </Container>
  );
};
