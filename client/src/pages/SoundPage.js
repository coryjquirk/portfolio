import React, {useState} from "react";
import { Col, Row, Container } from "../components/Grid";
import Sound from "../components/Sound";

const SoundPage = () => {
  const [fictionMode, setFictionMode] = useState(true);

  return (
      <Container fluid>
      <Sound></Sound>
    </Container>
  );
};

export default SoundPage;