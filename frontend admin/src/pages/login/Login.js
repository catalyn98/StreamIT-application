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
                {/* Input email, password and connect button */}
                <div className="sign-in-page-data">
                  <div className="sign-in-from w-100 m-auto">
                    <h3
                      className="mb-3 text-center"
                      style={{ fontSize: "2.369em" }}
                    >
                      Conectare
                    </h3>
                    <Form className="mt-4">
                      <Form.Group>
                        <Form.Control
                          type="email"
                          className="form-control mb-0 inputAdmin"
                          id="emailAddress"
                          placeholder="Tastează adresa de email"
                          autoComplete="off"
                          required
                        />
                      </Form.Group>
                      <Form.Group>
                        <Form.Control
                          type="password"
                          className="form-control mb-0 inputAdmin"
                          id="password"
                          placeholder="Tastează parola"
                          autoComplete="off"
                          required
                        />
                      </Form.Group>
                      <div className="sign-info">
                        <Link to="/">
                          <Button className="btn btn-hover btn-primary1 buttonConnectAdmin">
                            Conectează-te
                          </Button>
                        </Link>
                      </div>
                    </Form>
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
