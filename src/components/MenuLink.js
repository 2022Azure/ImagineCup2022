import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
const MenuLink = () => {
  return (
    <div>
    
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">
          <img
          alt=""
          src="/color-wheel-1.png"
          width="30"
          height="30"
          className="d-inline-block align-top"
        />{' '}
        Vision Home
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/tests" style={{marginLeft: "40px"}}>Take the Test</Nav.Link>
              <NavDropdown title="Info" id="collasible-nav-dropdown" style={{marginLeft: "40px"}}>
                <NavDropdown.Item href="/about-color-blind">
                  Color Blindness
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Look for Clinics nearby
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Credits</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Nav.Link href="/about-team">Know Our Team</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default MenuLink;
