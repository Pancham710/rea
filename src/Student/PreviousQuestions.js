import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import { Form } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
export default function PreviousQuestions() {
 
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
        <br></br>
        <br></br>
        
        <center>
          <h4>Previous questions</h4>
        </center>
      </div>
<br></br>
      <Row className="text-center mt-4">
        <Col className="  ">
          <h3>Cognizant</h3>
        </Col>
        <Col className=" ">
          <span>All Profile Questions</span> <br></br>
          <span>Aptitude questions , coding question etc..</span><br></br>
          <span>Interviews Questions   </span>
        </Col>
        <Col className=" ">
          {" "}
          <Button  variant="primary" size="lg">
            Download
          </Button>
        </Col>
      </Row>
    </div>
  );
}
