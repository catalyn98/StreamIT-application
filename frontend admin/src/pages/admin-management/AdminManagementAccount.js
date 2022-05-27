import React from "react";
import { Container, Row, Col, Tab, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Card from "../../components/card/Card";
import user from "../../assets/images/user/01.png";

export default function AdminManagementAccount() {
  return (
    <>
      <Container fluid>
        <Tab.Container defaultActiveKey="first">
          <Row>
            <Col lg="6">
              <Card>
                <Card.Header>
                  <Card.Header.Title>
                    <h4 className="card-title">Setări profil</h4>
                  </Card.Header.Title>
                </Card.Header>
                <Card.Body>
                  <Row>
                    {/* First column */}
                    <Col lg="4">
                      <div className="upload_profile d-inline-block">
                        {/* Change profile picture */}
                        <img
                          src={user}
                          className="profile-pic avatar-130 rounded-circle img-fluid"
                          alt="user"
                        />
                        <div className="p-image">
                          <i className="ri-pencil-line upload-button"></i>
                          <input
                            className="file-upload"
                            type="file"
                            accept="image/*"
                          />
                        </div>
                      </div>
                    </Col>
                    {/* Second column */}
                    <Col lg="8" className="device-margin">
                      <Form action="#">
                        <Row>
                          <Col md="12">
                            {/* Edit first name */}
                            <Form.Group className="form-group">
                              <Form.Label>Nume utilizator</Form.Label>
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
                          <Col md="12">
                            {/* Edit last name */}
                            <Form.Group className="form-group">
                              <Form.Label>Prenume utilizator</Form.Label>
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
                          <Col md="12">
                            {/* Edit email address */}
                            <Form.Group className="form-group">
                              <Form.Label>Adresă de email</Form.Label>
                              <Form.Control
                                type="text"
                                className="form-control mb-0"
                                id="emailAddress"
                                placeholder="Email"
                                autoComplete="off"
                                required
                              />
                            </Form.Group>
                          </Col>
                          <Col md="12">
                            {/* Edit username */}
                            <Form.Group className="form-group">
                              <Form.Label>Nume de utilizator</Form.Label>
                              <Form.Control
                                type="text"
                                className="form-control mb-0"
                                id="username"
                                placeholder="Nume de utilizator"
                                autoComplete="off"
                                required
                              />
                            </Form.Group>
                          </Col>
                          <Col md="12">
                            {/* Edit phone number */}
                            <Form.Group className="form-group">
                              <Form.Label>Număr de telefon</Form.Label>
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
                        </Row>
                      </Form>
                      <Link to="/">
                        <Button
                          type="submit"
                          variant="primary"
                          className="mr-2"
                        >
                          Salvează
                        </Button>
                      </Link>
                      <Link to="/">
                        <Button type="reset" variant="danger">
                          Anulează
                        </Button>
                      </Link>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Tab.Container>
      </Container>
    </>
  );
}
