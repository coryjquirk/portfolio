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
            <a id="returnHome" style={{textAlign: "left"}} href="/home"><p>Return home</p></a>
            <p>expecting something different on this page?</p>
            <p>please <a href="/contact">email me</a> to report an issue</p>
        </Col>
      </Row>
    </Container>
  );
};

export default NoMatch;
