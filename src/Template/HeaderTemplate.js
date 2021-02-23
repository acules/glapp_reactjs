import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import {
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
  NavDropdown,
} from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import Home from "./Home";
import JournalEntry from "./JournalEntry";
import Classification from "./Master/Classification";
import News from './News';
import AboutUs from './AboutUs';

export default class HeaderTemplate extends Component {
  render() {
    return (
      <div className="container mt-3">
        <Navbar bg="light" expand="lg">
        <LinkContainer to="#">
          <Navbar.Brand>Acules App</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
            <LinkContainer to="/">
                <Nav.Link>Dashboard</Nav.Link>
              </LinkContainer>
            <NavDropdown title="Master" id="basic-nav-dropdown">
            <LinkContainer to="/classification">
                <NavDropdown.Item>Classification</NavDropdown.Item>
                </LinkContainer>
                <NavDropdown.Item href="#action/3.2">
                Sub Classification
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                Referencee
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                Sub Referencee
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                Ledger
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                Sub Ledger
                </NavDropdown.Item>
              </NavDropdown>
              <LinkContainer to="/journalentry">
                <Nav.Link>Journal Entry</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/news">
                <Nav.Link>News</Nav.Link>
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

        <div className="container mt-3">
          <Switch>
            <Route exact path={["/"]} component={Home} />
            <Route exact path="/classification" component={Classification} />
            <Route exact path="/journalentry" component={JournalEntry} />
            <Route exact path="/news" component={News} />
            <Route exact path="/about" component={AboutUs} />
          </Switch>
        </div>
      </div>
    );
  }
}
