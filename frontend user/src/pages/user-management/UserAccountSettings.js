import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container, Form, Button } from "react-bootstrap";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import { MyInformationsContext } from "../../context/myInformationsContext/MyInformationsContext";
import {
  getMyInformations,
  updateMyInformations,
} from "../../context/myInformationsContext/apiCalls";
import userAvatar from "../../assets/images/user/user.png";

export default function UserAccountSettings() {
  const [userInfo, setUserInfo] = useState(null);
  const { user, dispatchUser } = useContext(MyInformationsContext);

  useEffect(() => {
    getMyInformations(dispatchUser);
  }, [dispatchUser]);

  const handleChange = (e) => {
    const value = e.target.value;
    setUserInfo({ ...userInfo, [e.target.name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateMyInformations(dispatchUser);
  };

  return (
    <>
      <Header />
      <section className="m-profile manage-p">
        <Container>
          <Row className="row align-items-center justify-content-center h-100">
            <Col lg="10">
              <div className="sign-user_card">
                <Row>
                  {/* First column */}
                  <Col lg="2">
                    <div className="upload_profile d-inline-block">
                      {/* Change profile picture */}
                      <img
                        src={user.profilePicture || userAvatar}
                        className="profile-pic avatar-130 rounded-circle img-fluname"
                        alt="user"
                      />
                      <div className="p-image">
                        <input className="file-upload" type="file" />
                        <i className="ri-pencil-line upload-button"></i>
                      </div>
                    </div>
                  </Col>
                  {/* Second column */}
                  <Col lg="10" className="device-margin">
                    <div className="profile-from">
                      <h4 className="mb-3">Setări profil</h4>
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
                            {/* Edit password */}
                            <Form.Group className="form-group">
                              <Form.Label>Parolă</Form.Label>
                              <Form.Control
                                type="password"
                                className="form-control mb-0"
                                name="password"
                                placeholder="parolă"
                                onChange={handleChange}
                                required
                              />
                            </Form.Group>
                          </Col>
                        </Row>
                        <Button
                          type="button"
                          variant="btn btn-primary"
                          style={{ backgroundColor: "red", borderColor: "red" }}
                          onClick={handleSubmit}
                        >
                          Actualizează
                        </Button>{" "}
                        <Link to="/user-profile">
                          <Button
                            type="reset"
                            variant="btn iq-bg-danger"
                            style={{
                              backgroundColor: "white",
                              borderColor: "white",
                            }}
                          >
                            Anulează
                          </Button>
                        </Link>
                      </Form>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <Footer />
    </>
  );
}
