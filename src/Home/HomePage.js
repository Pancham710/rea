import React from 'react'
import { Button } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { Container } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { Link } from 'react-router-dom';
export default function HomePage() {
  return (
    
    <div className="HomePage">
      
      <center>
        <div id="heading">
            <br></br>
                <center> <h1> MCOE Training and Placement CELL</h1> </center>
        </div>
        <Container fluid>
      <Row>
        <Col></Col>
        <Col sm={6}>
          <Card className="mt-4 border-4 border-black"  style={{borderRadius: '20px 20px 0px 0px',borderWidth: '1.6px',borderColor: 'black'}} >
            <Card.Header className="text-center bg-info text-white p-4"  style={{borderRadius: '20px 20px 0px 0px'}}  as="h4">
              Student Login
            </Card.Header>
            <Card.Body>
                <Form>
                <div className="mb-2">
                   <Link to="/login">
                    <center><Button variant="info" size="lg" >
                     Login
                  </Button>{' '}</center>
                  </Link>
                  
                </div>
                </Form>

                <Form>
                <div className="mb-2">
                   <Link to="/register">
                   <center><Button variant="info" size="lg">
                     Register
                  </Button>{' '}</center>
                  </Link>
                  
                  
                </div>
                </Form>

            </Card.Body>
          </Card>
        </Col>
        <Col></Col>
      </Row>
    </Container>

    <Container fluid>
      <Row>
        <Col></Col>
        <Col sm={6}>
          <Card className="mt-4 border-4 border-black"  style={{borderRadius: '20px 20px 0px 0px',borderWidth: '1.6px',borderColor: 'black'}} >
            <Card.Header className="text-center bg-info text-white p-4"  style={{borderRadius: '20px 20px 0px 0px'}}  as="h4">
              Admin / Co-ordinator 
            </Card.Header>
            <Card.Body>
                <Form>
                <div className="mb-2">
                    <center><Button variant="info" size="lg">
                      Admin
                  </Button>{' '}</center>
                  
                  
                </div>
                </Form>

                <Form>
                <div className="mb-2">
                    <center><Button variant="info" size="lg">
                     Co-ordinator
                  </Button>{' '}</center>
                  
                  
                </div>
                </Form>

            </Card.Body>
          </Card>
        </Col>
        <Col></Col>
      </Row>
    </Container>

        





      </center>
        
       
      
    </div>
  )
}
