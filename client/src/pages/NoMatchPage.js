import React from "react";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";

const NoMatch = () => {
  return (
    <Container fluid>
      <Row>
        <Col size="md-12">
            <h1>ope!</h1>
            <h1>404 page not found</h1>
            <h1>
              <span role="img" aria-label="Thinking Face Emoji">
              🤔
              </span>
            </h1>
        </Col>
      </Row>
    </Container>
  );
};

export default NoMatch;
