import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import { Form } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
export default function StudentDashboard() {
  return (
    <div className="StudentDashboard">
      <Navbar variant="dark" bg="dark" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#">Placement Cell</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="/profile">My Profile</Nav.Link>
              <Nav.Link href="/interviews">My Interviews</Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Button variant="outline-danger">Logout</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div>
        <center>
          <h1>Student Dashboard</h1>
        </center>
      </div>

 
      <Row>
        <Col className="text-end m-4">
          {" "}
          <Button className="p-5" variant="outline-dark" size="lg">
            Companies to apply
          </Button>
        </Col>
        <Col  className="m-4">
          {" "}
          <Button className="p-5" variant="outline-dark" size="lg">
            Applied Companies &nbsp;&nbsp;
          </Button>
        </Col>
      </Row>

      <Row>
        <Col className="text-end m-4">
          {" "}
          <Button className="p-5" variant="outline-dark" size="lg">
          &nbsp;&nbsp; Track the progress
          </Button>
        </Col>
        <Col className="m-4">
          {" "}
          <Button className="p-5 " variant="outline-dark" size="lg">
            Previous question set
          </Button>
        </Col>
      </Row>
    </div>
  );
}
