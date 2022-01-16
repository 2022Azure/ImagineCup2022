import React from "react";
import { Container, Row, Carousel } from "react-bootstrap";
const AboutT = () => {
  return (
    <div id="car">
      <Carousel variant="dark">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://media-exp1.licdn.com/dms/image/C4E03AQEFO9Ka4FuUWw/profile-displayphoto-shrink_200_200/0/1625170169411?e=1647475200&v=beta&t=60kyWqAwC6Y1Uf2uxxyLhzjjNv5u67UEmfy_HV_zDNI"
            alt="First slide"
          />
          <Carousel.Caption>
            <Container class="car-footer">
              <Row
                style={{
                  backgroundColor: "#FFF5FD",
                  width: "55px",
                  paddingLeft: "3px",
                  paddingRight: "8px",
                  boxShadow: "5px 10px #686D76 ",
                }}
              >
                Rahul
              </Row>
            </Container>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://media-exp1.licdn.com/dms/image/C4E03AQFnfOMIRaueBA/profile-displayphoto-shrink_200_200/0/1632822776695?e=1647475200&v=beta&t=Q6Rot-Xng3M_zHtf_HHrlmOfekthFCUzizpZszq9qvo"
            alt="Second slide"
          />

          <Carousel.Caption>
            <Container class="car-footer">
              <Row
                style={{
                  backgroundColor: "#FFF5FD",
                  width: "50px",
                  paddingLeft: "3px",
                  paddingRight: "0px",
                  boxShadow: "5px 10px #686D76 ",
                }}
              >
                Harsh
              </Row>
            </Container>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://media-exp1.licdn.com/dms/image/C4D03AQEsAZyoCGtJug/profile-displayphoto-shrink_200_200/0/1639587120395?e=1647475200&v=beta&t=4g7FpjQXWScYOlFj5CwOY02RVrBvj8LyKl65nqWvbYI"
            alt="Third slide"
          />

          <Carousel.Caption>
            <Container class="car-footer">
              <Row
                style={{
                  backgroundColor: "#FFF5FD",
                  width: "65px",
                  paddingLeft: "3px",
                  paddingRight: "8px",
                  boxShadow: "5px 10px #686D76 ",
                }}
              >
                Abhinav
              </Row>
            </Container>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <div id="car-details">
        <h3>Vision "Dream to Reality"</h3>
        <p id="car-details">
          Our Goal was to bring Vision live one day. 
          <br/>
          Finally in 2022 we took our first
          step forward and began working on the prototype Vision 1.0.

          <br />
          <b> You can’t stop the waves but you can learn to surf.
          </b>
          <br/>
          Big Big thanks to Azure Services because nothing would have been possible without them.
        </p>
      </div>
    </div>
  );
};

export default AboutT;
