import React from "react";
import { Row, Col, Form, Button, Container } from "react-bootstrap";

export default function ContactForm() {
  return (
    <>
      <div className="text-center iq-title-box iq-box iq-title-default">
        <h2 className="iq-title">Trimite un mesaj</h2>
        <p className="iq-title-desc">
          Completează acest formular pentru a lua legătura cu noi
        </p>
      </div>
      <div className="wrapper">
        <section>
          <Container>
            <Row className="row align-items-center justify-content-center h-100">
              <Col lg="10">
                <div
                  className="sign-user_card"
                  style={{ backgroundColor: "#161414" }}
                >
                  <Row>
                    <Col lg="12" className="device-margin">
                      <div className="profile-from">
                        <Form action="#">
                          <Row>
                            <Col md="6">
                              <Form.Group className="form-group">
                                <Form.Control
                                  type="text"
                                  className="form-control mb-0"
                                  id="firstName"
                                  placeholder="Nume"
                                  autoComplete="off"
                                  required
                                />
                              </Form.Group>
                            </Col>
                            <Col md="6">
                              <Form.Group className="form-group">
                                <Form.Control
                                  type="text"
                                  className="form-control mb-0"
                                  id="lastName"
                                  placeholder="Prenume"
                                  autoComplete="off"
                                  required
                                />
                              </Form.Group>
                            </Col>
                            <Col md="6">
                              <Form.Group className="form-group">
                                <Form.Control
                                  type="text"
                                  className="form-control mb-0"
                                  id="phoneNumber"
                                  placeholder="Telefon"
                                  autoComplete="off"
                                  required
                                />
                              </Form.Group>
                            </Col>
                            <Col md="6">
                              <Form.Group className="form-group">
                                <Form.Control
                                  type="text"
                                  className="form-control mb-0"
                                  id="emailAddress"
                                  placeholder="E-mail"
                                  autoComplete="off"
                                  required
                                />
                              </Form.Group>
                            </Col>
                            <Col md="12">
                              <div className="cfield">
                                <span className="wpcf7-form-control-wrap your-message">
                                  <textarea
                                    name="your-message"
                                    cols="40"
                                    rows="10"
                                    className="wpcf7-form-control wpcf7-textarea wpcf7-validates-as-required"
                                    aria-required="true"
                                    aria-invalid="false"
                                    placeholder="Mesaj"
                                  ></textarea>
                                </span>
                              </div>
                            </Col>
                          </Row>
                          <Button
                            type="button"
                            variant="btn btn-primary"
                            style={{
                              backgroundColor: "red",
                              borderColor: "red",
                            }}
                          >
                            Trimite
                          </Button>
                        </Form>
                      </div>
                    </Col>
                  </Row>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </div>
    </>
  );
}
