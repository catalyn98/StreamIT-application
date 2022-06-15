import React, { useContext, useEffect, useState } from "react";
import { Container, Row, Col, Tab, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Card from "../../components/card/Card";
import { MyInformationsContext } from "../../context/myInformationsContext/MyInformationsContext";
import {
  getMyInformations,
  updateMyInformations,
} from "../../context/myInformationsContext/apiCalls";
import userAvatr from "../../assets/images/user/user.png";

export default function AdminManagementAccount() {
  const [userInfo, setUserInfo] = useState(null);
  const { user, dispatchMyInformations } = useContext(MyInformationsContext);

  useEffect(() => {
    getMyInformations(dispatchMyInformations);
  }, [dispatchMyInformations]);

  const handleChange = (e) => {
    const value = e.target.value;
    setUserInfo({ ...userInfo, [e.target.name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateMyInformations(dispatchMyInformations);
  };

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
                          src={user.profilePicture || userAvatr}
                          className="profile-pic avatar-130 rounded-circle img-fluid"
                          alt="user"
                        />
                        <div className="p-image">
                          <i className="ri-pencil-line upload-button"></i>
                          <input className="file-upload" type="file" />
                        </div>
                      </div>
                    </Col>
                    {/* Second column */}
                    <Col lg="12" className="device-margin">
                      <Form action="#">
                        <Row>
                          <Col md="6">
                            {/* Edit first name */}
                            <Form.Group className="form-group">
                              <Form.Label>Nume utilizator</Form.Label>
                              <Form.Control
                                type="text"
                                className="form-control mb-0"
                                name="firstName"
                                placeholder={user.firstName}
                                onChange={handleChange}
                                required
                              />
                            </Form.Group>
                          </Col>
                          <Col md="6">
                            {/* Edit last name */}
                            <Form.Group className="form-group">
                              <Form.Label>Prenume utilizator</Form.Label>
                              <Form.Control
                                type="text"
                                className="form-control mb-0"
                                name="lastName"
                                placeholder={user.lastName}
                                onChange={handleChange}
                                required
                              />
                            </Form.Group>
                          </Col>
                          <Col md="6">
                            {/* Edit email address */}
                            <Form.Group className="form-group">
                              <Form.Label>Adresă de email</Form.Label>
                              <Form.Control
                                type="text"
                                className="form-control mb-0"
                                name="emailAddress"
                                placeholder={user.email}
                                onChange={handleChange}
                                required
                              />
                            </Form.Group>
                          </Col>
                          <Col md="6">
                            {/* Edit username */}
                            <Form.Group className="form-group">
                              <Form.Label>Nume de utilizator</Form.Label>
                              <Form.Control
                                type="text"
                                className="form-control mb-0"
                                name="username"
                                placeholder={user.username}
                                onChange={handleChange}
                                required
                              />
                            </Form.Group>
                          </Col>
                          <Col md="6">
                            {/* Edit phone number */}
                            <Form.Group className="form-group">
                              <Form.Label>Număr de telefon</Form.Label>
                              <Form.Control
                                type="text"
                                className="form-control mb-0"
                                name="phoneNumber"
                                placeholder={user.phoneNumber}
                                onChange={handleChange}
                                required
                              />
                            </Form.Group>
                          </Col>
                          <Col md="6">
                            {/* Edit phone number */}
                            <Form.Group className="form-group">
                              <Form.Label>Parolă</Form.Label>
                              <Form.Control
                                type="text"
                                className="form-control mb-0"
                                name="password"
                                placeholder="parolă"
                                onChange={handleChange}
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
                          onClick={handleSubmit}
                        >
                          Actualizează
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
