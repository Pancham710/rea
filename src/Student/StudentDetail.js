import React from "react";

import "./StudentDetail.css";

import { Button } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { Container } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { FloatingLabel } from "react-bootstrap";

export default function StudentDetail() {
  return (
    <Container fluid>
      <Row>
        <Col></Col>
        <Col sm={6}>
          <Card className="mt-4">
            <Card.Header className="text-center" as="h4">
              Student Login
            </Card.Header>
            <Card.Body>
              <div className="text-center">
                <span>Student Details</span>
              </div>
              <Form>
                <Form.Group className="mb-3" controlId="formGroupPassword">
                  <Form.Label>Student Name</Form.Label>
                  <Form.Control type="text" placeholder="name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
                <Row>
                  <Col>
                    <Form.Label>First name</Form.Label>
                    <Form.Control placeholder="First name" />
                  </Col>
                  <Col>
                    <Form.Label>Last name</Form.Label>
                    <Form.Control placeholder="Last name" />
                  </Col>
                </Row>

                <Form.Label className="mt-4">Permanent Address</Form.Label>
                <Form.Control
                  as="textarea"
                  placeholder="Permanent Address Here"
                  style={{ height: "100px" }}
                />

                <Form.Label className="mt-2">Current Address</Form.Label>
                <Form.Control
                  as="textarea"
                  placeholder="Current Address Here"
                  style={{ height: "100px" }}
                />
              </Form>
              <br></br>
              <Button variant="primary">Register</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
}
