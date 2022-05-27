import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Button, Form } from "react-bootstrap";

export default function RecoveryPassword() {
  return (
    <>
      <section className="sign-in-page">
        <Container>
          <Row className="row justify-content-center align-items-center height-self-center">
            <Col lg="5" md="12" className="align-self-center">
              <div className="sign-user_card ">
                <div className="sign-in-page-data">
                  <div className="sign-in-from w-100 m-auto">
                    <h3 className="mb-3 text-center">Resetare parolă</h3>
                    <p className="text-body">
                      Introduceți adresa dumneavoatră de email și vă vom trimite
                      un mesaj cu instrucțiuni pentru a vă reseta parola.
                    </p>
                    <Form className="mt-4">
                      {/* Email input */}
                      <div className="form-group">
                        <input
                          type="email"
                          className="form-control mb-0"
                          id="emailAddress"
                          placeholder="Tastează adresa de email"
                          autoComplete="off"
                          required
                        />
                      </div>
                      <div className="sign-info">
                        {/* Reset button */}
                        <Button
                          className="btn btn-primary mt-2"
                          style={{ backgroundColor: "red", borderColor: "red" }}
                        >
                          Resetează
                        </Button>{" "}
                        {/* Cancel button */}
                        <Link to="/welcome/login">
                          <Button className="btn btn-dark mt-2">
                            Anulează
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
