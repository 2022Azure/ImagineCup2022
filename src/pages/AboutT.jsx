import React from "react";
import { Container, Row, Col, Carousel } from "react-bootstrap";
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
                  boxShadow:"5px 10px #686D76 "
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
                  boxShadow:"5px 10px #686D76 "
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
                  boxShadow:"5px 10px #686D76 "
                }}
              >
                Abhinav
              </Row>
            </Container>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <div className="details">
        <h3>How We Got Together</h3>
        <p>
          lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
          ipsum
        </p>
      </div>
    </div>
  );
};

export default AboutT;
