import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Button, Carousel, Container, Row, Col, Form } from "react-bootstrap";
import { slide as Menu } from "react-burger-menu";

import "./styles.css";
import Signup from "../Signup/Signup";

var email,
  password = "";

function showCredentials() {}

function Login({ /* logPass, logEmail */ getLogEmail, getLogPassword, loginFunction }) {
  return (
    <div
      style={{
        height: 700,
        backgroundImage:
          "url(" +
          "https://magarticles.magzter.com/articles/410/236636/59a598a8e876f/Manipal-University-Jaipur-Fostering-Academic-Excellence.jpg" +
          ")",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Menu>
        <a
          id="manipalWebsite"
          className="menu-item"
          href="https://jaipur.manipal.edu/"
          target="_blank"
        >
          Main Website (MUJ)
        </a>
        <a
          id="about"
          className="menu-item"
          href="https://jaipur.manipal.edu/muj/about-us.html"
          target="_blank"
        >
          About
        </a>
        <a
          id="contact"
          className="menu-item"
          href="https://jaipur.manipal.edu/muj/contact-us.html"
          target="_blank"
        >
          Contact
        </a>
        <a id="Signup" className="menu-item" href="/Signup">
          Sign up/Register
        </a>
      </Menu>
      <Container>
        <Row>
          <Col>
            <div className="text-center">
              <div class="m">
                <h1>Manipal University Jaipur</h1>
              </div>
            </div>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col className="mt-5" md={{ span: 4, offset: 4 }}>
            <div className="opacity">
              <div
                className="mt-5 p-3 border text-center"
                style={{ backgroundColor: "white", borderRadius: 20 }}
              >
                <p className="highlight">Please Enter Details to Sign in</p>
                <Form>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address/Username</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Enter email"
                      onChange={(e) => {
                        getLogEmail(e)
                      }}
                    />
                    <Form.Text className="text-muted">
                      We'll never share your email with anyone else.
                    </Form.Text>
                  </Form.Group>

                  <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder=""
                      onChange={(e) => {
                        getLogPassword(e);
                      }}
                    />
                  </Form.Group>

                  <Route path="/Signup" exact strict component={<Signup />} />
                  <ul className="t">
                    Don't have an Account{" "}
                    <Link to="/Signup" exact strict>
                      Sign up
                    </Link>
                  </ul>

                  <Button
                    variant="primary"
                    type="button"
                    onClick={() => {
                      loginFunction()
                      /* console.log(logEmail);
                      console.log(logPass); */
                    }}
                  >
                    Sign in
                  </Button>
                </Form>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Login;

{
  /* <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://picsum.photos/50/25"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://picsum.photos/50/25"
              alt="Third slide"
            />
  
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://picsum.photos/50/25"
              alt="Third slide"
            />
  
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel> */
}
