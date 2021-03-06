import React from "react";
import {
  Button,
  Nav,
  Col,
  Row,
  Navbar,
  Container,
  Tabs,
  Tab,
  Form,
  Card,
  Accordion,
} from "react-bootstrap";
import axios from "axios";
import { Circle } from "rc-progress";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

 import "./Admin.css";

const loadingStyle = {
  width: "100px",
  height: "100px",
};

/* var convoDates = {
  firstDay: "",
  secondDay: "",
  thirdDay: ""
}


function getConvocationDates(){
  axios.get("http://localhost:8080/getDates").then(res =>{
    console.log(res.data);     
    convoDates.firstDay = res.data[0].firstDate;
    convoDates.secondDay = res.data[0].secondDate;
    convoDates.thirdDay = res.data[0].thirdDate;
    console.log(convoDates.firstDay);
    console.log(convoDates.secondDay);
    console.log(convoDates.thirdDay);  
  })
}

function modifyDates(){
  console.log(convoDates.firstDay);
  
} */

// let records = [];

function Admin({ studentRecords, getRecs }) {
  console.log(studentRecords)
  let a = studentRecords.length
  console.log(a)
  let b = a/10;
  let c = b *100
  console.log(c + " npm percent")


  return (
    <div class="ba">
      <div>
        <Navbar bg="primary" variant="dark">
          <Navbar.Brand href="https://jaipur.manipal.edu/">
            Manipal University Jaipur
          </Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="/Welcome">Welcome</Nav.Link>
            <Nav.Link href="/Admin">Dashboard</Nav.Link>
            <Nav.Link href="/login">Logout</Nav.Link>
            <Nav.Link href="https://jaipur.manipal.edu/muj/Announcements.html" target="_blank">Announcements</Nav.Link>
          </Nav>
        </Navbar>
        <div>
          <Container class="X">
            <Row>
              <div style={loadingStyle} className="Col m-auto">
                Percentage of Students Registered
                
                <Circle
                  percent="80"
                  strokeWidth="9"
                  strokeColor="red"
                  gapDegree="90"
                  gapPosition="bottom"
                />
              </div>
              <div style={loadingStyle} className="Col m-auto">
                Percentage of Students Attending
                <Circle
                  percent="65"
                  strokeWidth="9"
                  strokeColor="green"
                  gapDegree="90"
                  gapPosition="bottom"
                />
              </div>
              <div style={loadingStyle} className="Col m-auto">
                Percentage of Student not yet paid
                <Circle
                  percent="30"
                  strokeWidth="9"
                  strokeColor="blue"
                  gapDegree="90"
                  gapPosition="bottom"
                />
              </div>
            </Row>
          </Container>
        </div>
        {/* main logical part of Admin page is here */}
        <br />
        <br />
        <br />

        <hr />

        <div>
          <Tabs defaultActiveKey="modifyDates" id="adminTabs">
            <Tab eventKey="modifyDates" title="Dates">
              <div id="currentDatesBlock">
              <span className="ht">These are the Set dates for the convocation:</span>
                <ul>
                <span className="ht"><li>Convocation Day 1 : 10th July</li></span>
                <span className="ht"><li>Convocation Day 2 : 12th July</li></span>  
                <span className="ht"><li>Convocation Day 3 : 14th July</li></span>
                </ul>
              </div>
              {/* {console.log(recs)} */}
              {/* <div>
                <ul>
                  <li>
                  <Form>
                  <Form.Row>
                    <Form.Group as={Col} controlId="formGridFirstName">
                      <Form.Label>New Date for Convocation</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder=""
                        onChange={(e) => {
                          convoDates.firstDay = e.target.value;
                        }}
                      />
                    </Form.Group>
                    </Form.Row>
                    </Form>
                  </li>
                </ul>
              </div> */}

              {/* <Button onClick={() => {modifyDates()}}>Change Dates</Button> */}
            </Tab>
            <Tab eventKey="view" title="View Registered Information">
              <Container>
                  <br />
                <Row className="justify-content-m-center">
                <span className="ht"><h4>Click on the names to view complete information about each student</h4></span>

                </Row>
              </Container>
              {/* <br /> */}
              <hr />
              {studentRecords.map((x, i) => (
                //  <div>{x.firstName}</div>
                <div>
                  <Accordion>
                    <Card>
                      <Card.Header>
                        <Accordion.Toggle
                          as={Button}
                          variant="link"
                          eventKey="0"
                        >
                          <h5>{x.firstName}</h5>
                        </Accordion.Toggle>
                      </Card.Header>
                      <Accordion.Collapse eventKey="0">
                        <Card.Body>
                          Last Name : {x.lastName} <br />
                          Registration Number : {x.regno} <br />
                          Email ID : {x.email} <br />
                          Student Phone Number : {x.studentNo} <br />
                          Parent Phone Number : {x.parentNo} <br />
                          Student Blood Type : {x.bloodgrp} <br />
                          Program : {x.program} <br />
                          Department : {x.dept} <br />
                          Year of Graduation : {x.gradyear} <br />
                          Month of Graduation : {x.gradmonth} <br />
                          Address : {x.address} <br />
                          City : {x.city} <br />
                          Zip Code : {x.zip} <br />
                          {/* Number of Family Members Attending : {
                            x.familyCount
                          }{" "} */}
                          <br />
                          {/* Attending on Date : {x.chosenDate} <br /> */}
                        </Card.Body>
                      </Accordion.Collapse>
                    </Card>
                  </Accordion>
                </div>
              ))}
            </Tab>
          </Tabs>
        </div>
      </div>
    </div>
  );
}

export default Admin;
