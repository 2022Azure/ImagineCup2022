import React from "react";
import { Card, ListGroup, CardGroup, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
const ContactPg = () => {
  return (
    <div>
      <Container fluid>
        <h1 className="contact-header">Contact Us</h1>
          <CardGroup className="contact-section">
            <Card>
              <Card.Img
                variant="top"
                src="https://media-exp1.licdn.com/dms/image/C4E03AQEFO9Ka4FuUWw/profile-displayphoto-shrink_200_200/0/1625170169411?e=1647475200&v=beta&t=60kyWqAwC6Y1Uf2uxxyLhzjjNv5u67UEmfy_HV_zDNI"
              />
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <ListGroup variant="flush">
                  <ListGroup.Item>Cras justo odio</ListGroup.Item>
                  <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                  <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                </ListGroup>
                <small className="text-muted">Last updated 3 mins ago</small>
              </Card.Footer>
            </Card>
            <Card>
              <Card.Img variant="top" src="holder.js/100px160" />
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This card has supporting text below as a natural lead-in to
                  additional content.{" "}
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
              </Card.Footer>
            </Card>
            <Card>
              <Card.Img variant="top" src="holder.js/100px160" />
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This card has even longer
                  content than the first to show that equal height action.
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
              </Card.Footer>
            </Card>
          </CardGroup>
      </Container>
    </div>
  );
};

export default ContactPg;
