import React from 'react';
import { Jumbotron, Container } from 'reactstrap';


const Infotext = (props) => {
  return (
    <div>
      <Jumbotron fluid>
        <Container fluid>
          <h1 className="animated fadeInUp display-3">Welcome to My Gallary</h1>
          <p className="animated fadeInUp lead">Hi there,You found some amazing Mobile Photography :) </p>
        </Container>
      </Jumbotron>
      </div>

  );
};

export default Infotext;