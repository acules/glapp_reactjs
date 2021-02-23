import React, { Component } from "react";
import { Table, Container, Button } from "react-bootstrap";

export default class Classification extends Component {
  render() {
    return (
      <Container fluid>
        <div>
          <br />
          <h3>Data Classification</h3>
          <hr />
          <Button variant="outline-primary" size="sm">Create</Button>{' '}
          <br /><br />
          <Table striped bordered hover size="sm">
            <thead>
              <tr>
                <th>#</th>
                <th>ID</th>
                <th>Name</th>
                <th>Aksi</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>001</td>
                <td>ASET</td>
                <td><Button variant="outline-success" size="sm">Edit</Button>{' '} <Button variant="outline-danger" size="sm">Delete</Button>{' '} </td>
              </tr>
              <tr>
                <td>2</td>
                <td>002</td>
                <td>KEWAJIBAN DAN MODAL</td>
                <td><Button variant="outline-success" size="sm">Edit</Button>{' '} <Button variant="outline-danger" size="sm">Delete</Button>{' '} </td>
              </tr>
              <tr>
                <td>3</td>
                <td>003</td>
                <td>PENDAPATAN</td>
                <td><Button variant="outline-success" size="sm">Edit</Button>{' '} <Button variant="outline-danger" size="sm">Delete</Button>{' '} </td>
              </tr>
            </tbody>
          </Table>
        </div>
      </Container>
    );
  }
}
