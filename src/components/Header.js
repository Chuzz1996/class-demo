import React, { Component } from "react";
import { Navbar, Container } from "react-bootstrap";
class Header extends Component {
  render() {
    return (
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            Welcome to your class of components in react
          </Navbar.Brand>
        </Container>
      </Navbar>
    );
  }
}
export default Header;
