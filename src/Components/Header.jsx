import React from 'react';
import { Navbar, Container, Nav, Button, NavDropdown } from 'react-bootstrap';
import { FaShoppingCart, FaUser } from 'react-icons/fa'; 

const Header = () => (
  <Navbar expand="lg" style={{ background: "#FFC7EA" }}>
    <Container>
      <Navbar.Brand href="#home">
        <img
          src="https://media.licdn.com/dms/image/C560BAQH6xnntDplTJA/company-logo_200_200/0/1672835929573?e=2147483647&v=beta&t=UkHS_hzMoXOfhL3NEMLx9UdhiWHkHsz0rYBjm46Oy70"
          width="30"
          height="30"
          className="d-inline-block align-top"
          alt="Logo"
        />
        Reflekt
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mx-auto">
          <Nav.Link href="#">Home</Nav.Link>
          <Nav.Link href="#">About</Nav.Link>
          <Nav.Link href="#">Products</Nav.Link>
        </Nav>
        <Nav className="ml-auto">
          <Nav.Link href="#">
            <FaUser /> 
            Login
          </Nav.Link>
          <Nav.Link href="#">Signup</Nav.Link>
          <Button variant="outline-primary" className="ml-2">
            <FaShoppingCart /> 
            Add to Cart
          </Button>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default Header;
