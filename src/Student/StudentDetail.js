import React from "react";

import "./StudentDetail.css";

import { Button } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { Container } from "react-bootstrap";
import { Card } from "react-bootstrap";
//import { FloatingLabel } from "react-bootstrap";
import { Dropdown } from "react-bootstrap";
export default function StudentDetail() {
  return (
    <Container fluid>
      <Row>
        <Col></Col>
        <Col sm={6}>
          <Card className="mt-4 border-4 border-black"  style={{borderRadius: '20px 20px 0px 0px',borderWidth: '1.6px',borderColor: 'black'}} >
            <Card.Header className="text-center bg-info text-white p-4"  style={{borderRadius: '20px 20px 0px 0px'}}  as="h4">
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

                <Form.Group className="mb-3" controlId="formGroupPassword">
                  <Form.Label>Father's Name</Form.Label>
                  <Form.Control type="text" placeholder="name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formGroupPassword">
                  <Form.Label>Father's Occupation</Form.Label>
                  <Form.Control type="text" placeholder="name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formGroupPassword">
                  <Form.Label>Mother's Name</Form.Label>
                  <Form.Control type="text" placeholder="name" />
                </Form.Group> 

                <Form.Group className="mb-3" controlId="formGroupPassword">
                  <Form.Label>Mother's Occupation</Form.Label>
                  <Form.Control type="text" placeholder="name" />
                </Form.Group>

                <Row>
                  <Col>
                    <Form.Label>Date of Birth</Form.Label>
                    <Form.Control placeholder="Enter the date of birth DD/MM/YY" />
                  </Col>
                  <Col>
                    <Form.Label>PRN Number</Form.Label>
                    <Form.Control placeholder="PRN Number" />
                  </Col>
                </Row>

                <Row>
                  <Col>
                    <Form.Label>Year of Passing</Form.Label>
                    <Form.Control placeholder="Enter Year of Passing" />
                  </Col>
                  <Col>
                    <Form.Label>Branch</Form.Label>
                    <Form.Control placeholder="Enter the Branch" />
                  </Col>
                </Row>

                <Row>
                  <Col>
                    <Form.Label>Current Year </Form.Label>
                    <Form.Control placeholder="Enter Current Year" />
                  </Col>
                  <Col>
                    <Form.Label>Passport Photo</Form.Label>
                    <br></br>
                    <input type="file" id="myFile" name="filename"></input>
                  </Col>
                </Row>

                <div className="text-center">
                  <br></br>
                  <br></br>
                  <span>Gradutation Details</span>
                </div>

                <div>
                  <Form.Label className="mt-4">10th Details</Form.Label>
                </div>

                <Row>
                  <Col>
                    <Form.Label className="mt-2">
                      10th Percentage
                      <span className="compulsory">
                        {" "}
                        <sup> * </sup>{" "}
                      </span>
                    </Form.Label>
                    <Form.Control placeholder="Enter Percentage" />
                  </Col>
                  <Col>
                    <Form.Label>10th Board</Form.Label>
                    <Form.Control placeholder="Enter the 10th Board name " />
                  </Col>
                </Row>

                <div>
                  <Form.Label className="mt-4">
                    Upload the 10th Marksheet
                    <span className="compulsory">
                      {" "}
                      <sup> * </sup>{" "}
                    </span>
                  </Form.Label>{" "}
                  <sup></sup>
                  <input type="file" id="myFile" name="filename"></input>
                </div>

                <div>
                  <Form.Label className="mt-4">12th Details</Form.Label>
                </div>

                <Row>
                  <Col>
                    <Form.Label className="mt-2">
                      12th Percentage
                      <span className="compulsory">
                        {" "}
                        <sup> * </sup>{" "}
                      </span>
                    </Form.Label>
                    <Form.Control placeholder="Enter Percentage" />
                  </Col>
                  <Col>
                    <Form.Label>12th Board</Form.Label>
                    <Form.Control placeholder="Enter the 12th Board name " />
                  </Col>
                </Row>

                <div>
                  <Form.Label className="mt-4">
                    Upload the 12th Marksheet
                  </Form.Label>{" "}
                  <sup></sup>
                  <input type="file" id="myFile" name="filename"></input>
                </div>

                <div>
                  <Form.Label className="mt-4">Diploma Details</Form.Label>
                </div>

                <Row>
                  <Col>
                    <Form.Label className="mt-2">Diploma Percentage</Form.Label>
                    <Form.Control placeholder="Enter Percentage" />
                  </Col>
                  <Col>
                    <Form.Label>Diploma Board</Form.Label>
                    <Form.Control placeholder="Enter the 10th Board name " />
                  </Col>
                </Row>

                <div>
                  <Form.Label className="mt-4">
                    Upload the Diploma Marksheet
                    <span className="compulsory">
                      {" "}
                      <sup> * </sup>{" "}
                    </span>
                  </Form.Label>{" "}
                  <sup></sup>
                  <input type="file" id="myFile" name="filename"></input>
                </div>

                <div>
                  <Form.Label className="mt-4">UG Details</Form.Label>
                </div>

                <Row>
                  <Col>
                    <Form.Label className="mt-2">
                      FE Percentage
                      <span className="compulsory">
                        {" "}
                        <sup> * </sup>{" "}
                      </span>
                    </Form.Label>
                    <Form.Control placeholder="Enter Percentage" />
                  </Col>
                  <Col>
                    <Form.Label>FE Year </Form.Label>
                    <Form.Control placeholder="Enter FE passing year" />
                  </Col>
                </Row>

                <div>
                  <Form.Label className="mt-4">
                    Upload the FE Marksheet
                    <span className="compulsory">
                      {" "}
                      <sup> * </sup>{" "}
                    </span>
                  </Form.Label>{" "}
                  <sup></sup>
                  <input type="file" id="myFile" name="filename"></input>
                </div>

                <Row>
                  <Col>
                    <Form.Label className="mt-2">
                      SE Percentage
                      <span className="compulsory">
                        {" "}
                        <sup> * </sup>{" "}
                      </span>
                    </Form.Label>
                    <Form.Control placeholder="Enter Percentage" />
                  </Col>
                  <Col>
                    <Form.Label>SE Year </Form.Label>
                    <Form.Control placeholder="Enter FE passing year" />
                  </Col>
                </Row>

                <div>
                  <Form.Label className="mt-4">
                    Upload the SE Marksheet
                    <span className="compulsory">
                      {" "}
                      <sup> * </sup>{" "}
                    </span>
                  </Form.Label>{" "}
                  <sup></sup>
                  <input type="file" id="myFile" name="filename"></input>
                </div>

                <Row>
                  <Col>
                    <Form.Label className="mt-2">
                      TE Percentage
                      <span className="compulsory">
                        {" "}
                        <sup> * </sup>{" "}
                      </span>
                    </Form.Label>
                    <Form.Control placeholder="Enter Percentage" />
                  </Col>
                  <Col>
                    <Form.Label>TE Year </Form.Label>
                    <Form.Control placeholder="Enter FE passing year" />
                  </Col>
                </Row>

                <div>
                  <Form.Label className="mt-4">
                    Upload the TE Marksheet
                    <span className="compulsory">
                      {" "}
                      <sup> * </sup>{" "}
                    </span>
                  </Form.Label>{" "}
                  <sup></sup>
                  <input type="file" id="myFile" name="filename"></input>
                </div>

                <Row>
                  <Col>
                    <Form.Label className="mt-2">
                      BE Percentage
                      <span className="compulsory">
                        {" "}
                        <sup> * </sup>{" "}
                      </span>
                    </Form.Label>
                    <Form.Control placeholder="Enter Percentage" />
                  </Col>
                  <Col>
                    <Form.Label>BE Year </Form.Label>
                    <Form.Control placeholder="Enter FE passing year" />
                  </Col>
                </Row>

                <div>
                  <Form.Label className="mt-4">
                    Upload the BE Marksheet
                    <span className="compulsory">
                      {" "}
                      <sup> * </sup>{" "}
                    </span>
                  </Form.Label>{" "}
                  <sup></sup>
                  <input type="file" id="myFile" name="filename"></input>
                </div>

                <div className="text-center">
                  <br></br>
                  <br></br>
                  <span>Skills and other Details</span>
                </div>
                <div>
                  <Form.Label className="mt-4">Skills</Form.Label>
                </div>

                <Dropdown>
                  <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Select the skills 
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">C++</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">
                      java
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-3">
                      python
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>

                <Form.Label className="mt-4">Internships Done</Form.Label>
                <Form.Control
                  as="textarea"
                  placeholder="Enter the details such as work , projects etc....."
                  style={{ height: "100px" }}
                />

                <div>
                  <Form.Label className="mt-4">
                    Upload the Internship certificate
                    
                  </Form.Label>{" "}
                  <sup></sup>
                  
                  <input type="file" id="myFile" name="filename"></input>
                </div>

                <Form.Label className="mt-4">Courses Done</Form.Label>
                <Form.Control
                  as="textarea"
                  placeholder="Enter the course name and provide description of the course here"
                  style={{ height: "100px" }}
                />

                <div>
                  <Form.Label className="mt-4">
                    Upload the Course certificate
                    
                  </Form.Label>{" "}
                  <sup></sup>
                  
                  <input type="file" id="myFile" name="filename"></input>
                </div>

                <Form.Label className="mt-4">Projects</Form.Label>
                <Form.Control
                  as="textarea"
                  placeholder="Enter the project topic and provide the description here"
                  style={{ height: "100px" }}
                />

                <Form.Label className="mt-4">Extra Curriculum activities</Form.Label>
                <Form.Control
                  as="textarea"
                  placeholder="Enter the extra curriculum activities "
                  style={{ height: "100px" }}
                />


                <div>
                  <Form.Label className="mt-4">
                    Upload the resume in pdf format only
                    
                  </Form.Label>{" "}
                  <sup></sup>
                  
                  <input type="file" id="myFile" name="filename"></input>
                </div>
                <div>
                  <br></br>
                  <br></br>
                  <br></br>
                  
                <center><Button as="input" type="submit" value="Submit Form" />{' '}</center>
                </div>
                
              </Form>
              <br></br>
            </Card.Body>
          </Card>
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
}
