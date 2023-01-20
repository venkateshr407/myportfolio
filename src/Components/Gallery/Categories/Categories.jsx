import React from "react";
import { Container, Row, Col } from "reactstrap";
import "./categories.css";

export const Categories = (props) => {
  return (
    <Container>
      <Row className="c-wrapper">
        <Col xl={6} lg={6} md={6} sm={12} className="c-w-lf">
          c
        </Col>

        <Col xl={6} lg={6} md={6} sm={12} className="c-w-rt">
          <Row className="d-flex align-items c-o-rt ">
            {props.categoriesData?.featured?.map((category, index) => {
              return (
                <React.Fragment key={index}>
                  <Col xl={6} lg={6} md={6} sm={12} className="c-inner-rt">
                    <img src={category.image} alt={category.title} />
                  </Col>
                </React.Fragment>
              );
            })}
          </Row>
        </Col>
      </Row>
    </Container>
  );
};
