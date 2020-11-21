import React from "react";
import "./style.css";
import { Container, Navbar } from "react-bootstrap";


function Header(props) {
  return (
    <Container>
      <Navbar className="header" expand="sm" variant="dark" bg="dark">
        <Navbar.Brand href="#">Employee Directory</Navbar.Brand>
      </Navbar>
    </Container>
  );
}

export default Header;
