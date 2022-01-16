import React from "react";
import "../App.css";
import cbContents from "../data/CbTheory";
import Section from "../components/Section";
import { Container, Row, Col } from "react-bootstrap";

const AboutColorB = () => {
  return (
    <div className="main">
      <div className="header-container">
        <h1>About Color Blindness</h1>
      </div>
      <Container fluid>
        <Row>
            {" "}
            {cbContents
              .filter((content) => content.filter === "about")
              .map((info, i) => (
                <Col className="gridThree-2x1">
                  <Section
                    key={i}
                    className="about-sectionCB"
                    title={info.title}
                    description={info.infos}
                  />
                  <img
                    className="about-imageCB"
                    src={info.image}
                    alt={info.altImage}
                  />
                </Col>
              ))}
        </Row>
        <Row>
            {cbContents
              .filter((content) => content.filter === "types")
              .map((info, i) => (
                <Col className="gridThree-2x1">
                  <Section
                    key={i}
                    className="types-sectionCB"
                    title={info.title}
                    description={info.infos}
                  />
                  <img
                    className="about-imageCB"
                    src={info.image}
                    alt={info.altImage}
                  />
                </Col>
              ))}
        </Row>
            {cbContents
              .filter((content) => content.filter === "test")
              .map((info, i) => (
                  <Section
                    key={i}
                    title={info.title}
                    description={info.infos}
                  />                 
              ))}
      </Container>
     
    </div>
  );
};

export default AboutColorB;