import React, { Component } from "react";
import { Container, Carousel } from "react-bootstrap";

import Book from "./images/buku.jpg";
import Monkey from "./images/monyet.jpg";
import Logo from "./images/predator.jpg";

export default class Home extends Component {
  render() {
    return (
      <Container fluid>
        <Carousel>
          <Carousel.Item>
            <img src={Book} alt="First slide" className="d-block w-100" height="370" />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
          <img src={Monkey} alt="Second slide" className="d-block w-100" height="370" />
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
          <img src={Logo} alt="Third slide" className="d-block w-100" height="370" />
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Container>
    );
  }
}
