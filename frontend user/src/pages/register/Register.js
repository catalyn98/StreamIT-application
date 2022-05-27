import React from "react";
import { Container, Button, Row, Col, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Register() {
  return (
    <>
      <section className="sign-in-page">
        <Container>
          <Row className="justify-content-center align-items-center height-self-center">
            <Col lg="7" md="12" className="align-self-center">
              <div className="sign-user_card ">
                {/* Input form */}
                <div className="sign-in-page-data">
                  <div className="sign-in-from w-100 m-auto">
                    <h3 className="mb-3 text-center">Înregistrare</h3>
                    <Form>
                      <Row>
                        {/* Input email address */}
                        <Col md="6">
                          <Form.Group>
                            <Form.Label>Adresă de email</Form.Label>
                            <Form.Control
                              type="email"
                              className="mb-0"
                              id="emailAddress"
                              placeholder="Tastează adresa de email"
                              autoComplete="off"
                              required
                            />
                          </Form.Group>
                        </Col>
                        {/* Input username */}
                        <Col md="6">
                          <Form.Group>
                            <Form.Label>Nume de utilizator</Form.Label>
                            <Form.Control
                              type="text"
                              className="form-control mb-0"
                              id="username"
                              placeholder="Tastează nume de utilizator"
                              autoComplete="off"
                              required
                            />
                          </Form.Group>
                        </Col>
                        {/* Input first name */}
                        <Col md="6">
                          <Form.Group>
                            <Form.Label>Nume</Form.Label>
                            <Form.Control
                              type="text"
                              className="mb-0"
                              id="firstName"
                              placeholder="Tastează nume"
                              autoComplete="off"
                              required
                            />
                          </Form.Group>
                        </Col>
                        {/* Input last name */}
                        <Col md="6">
                          <Form.Group>
                            <Form.Label>Prenume</Form.Label>
                            <Form.Control
                              type="email"
                              className="mb-0"
                              id="lastName"
                              placeholder="Tastează prenume"
                              autoComplete="off"
                              required
                            />
                          </Form.Group>
                        </Col>
                        {/* Input Password */}
                        <Col md="6">
                          <Form.Group>
                            <Form.Label>Parolă</Form.Label>
                            <Form.Control
                              type="password"
                              className="mb-0"
                              id="password"
                              placeholder="Tastează parola"
                              autoComplete="on"
                              required
                            />
                          </Form.Group>
                        </Col>
                        {/* Input repeat password */}
                        <Col md="6">
                          <Form.Group>
                            <Form.Label>Repetă parola</Form.Label>
                            <Form.Control
                              type="password"
                              className="mb-0"
                              id="repeatPassword"
                              placeholder="Confirmați parola"
                              autoComplete="on"
                              required
                            />
                          </Form.Group>
                        </Col>
                      </Row>
                    </Form>
                    {/* Register button */}
                    <Link to="/">
                      <div className="sign-info">
                        <Button className="btn btn-hover btn-primary1">
                          Înregistrează-te
                        </Button>
                      </div>
                    </Link>
                  </div>
                </div>
                {/* Text */}
                <div className="mt-3">
                  <div className="d-flex justify-content-center links">
                    Ai deja un cont?
                    <Link
                      to="/welcome/login"
                      className="text-primary ml-2"
                      style={{ fontWeight: "bold" }}
                    >
                      Conectează-te
                    </Link>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
