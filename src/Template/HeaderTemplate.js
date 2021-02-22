import React from "react";

import {
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
  Container,
  NavDropdown,
} from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const HeaderTemplate = () => {
  return (
    <div>
      <Container fluid>
        <Navbar bg="light" expand="lg">
          <LinkContainer to="/">
            <Navbar.Brand>Acules App</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <NavDropdown title="Master" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Classification</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Sub Classification </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Referencee</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">Sub Referencee</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.5">Ledger</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.6">Sub Ledger</NavDropdown.Item>
              </NavDropdown>
              <LinkContainer to="/journalentry">
                <Nav.Link>Journal Entry</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/portopolio">
                <Nav.Link>Portopolio</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/about">
                <Nav.Link>About Us</Nav.Link>
              </LinkContainer>
            </Nav>
            <Form inline>
              <FormControl
                type="text"
                placeholder="Search"
                className="mr-sm-2"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </div>
  );
};

export default HeaderTemplate;
