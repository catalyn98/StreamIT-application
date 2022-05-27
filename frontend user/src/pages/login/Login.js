import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <>
      <section className="sign-in-page">
        <Container>
          <Row className="justify-content-center align-items-center height-self-center">
            <Col lg="5" md="12" className="align-self-center">
              <div className="sign-user_card ">
                {/* Input form */}
                <div className="sign-in-page-data">
                  <div className="sign-in-from w-100 m-auto">
                    <h3 className="mb-3 text-center">Conectare</h3>
                    <Form className="mt-4">
                      {/* Input email */}
                      <Form.Group>
                        <Form.Control
                          type="email"
                          className="form-control mb-0"
                          id="emailAddress"
                          placeholder="Tastează adresa de email"
                          autoComplete="off"
                          required
                        />
                      </Form.Group>
                      {/* Input password */}
                      <Form.Group>
                        <Form.Control
                          type="password"
                          className="form-control mb-0"
                          id="password"
                          placeholder="Tastează parola"
                          autoComplete="off"
                          required
                        />
                      </Form.Group>
                      <Link to="/">
                        <div className="sign-info">
                          {/* Connect button */}
                          <Button className="btn btn-hover btn-primary1">
                            Conectează-te
                          </Button>
                        </div>
                      </Link>
                    </Form>
                  </div>
                </div>
                {/* Text */}
                <div className="mt-3">
                  <div className="d-flex justify-content-center links">
                    Nu ai încă un cont?
                    <Link
                      to="/welcome/register"
                      className="text-primary ml-2"
                      style={{ fontWeight: "bold" }}
                    >
                      Înregistrează-te
                    </Link>
                  </div>
                  <div className="d-flex justify-content-center links">
                    <Link
                      to="/welcome/recovery-password"
                      className="f-link"
                      style={{ color: "white" }}
                    >
                      Ți-ai uitat parola?
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
