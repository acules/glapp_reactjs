import React, { Component } from "react";
import {
  Container,
  Jumbotron,
} from "react-bootstrap";

export default class Home extends Component {
  render() {
    return (
      <Container fluid>
      <Jumbotron>
        <Container>
          <h1>Welcome to Acules APP</h1>
          <p>
            This is a modified jumbotron that occupies the entire horizontal
            space of its parent.
          </p>
        </Container>
      </Jumbotron>
      </Container>
    );
  }
}
