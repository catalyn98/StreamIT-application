import React, { useContext, useEffect, useState } from "react";
import { Container, Row, Col, Tab, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Card from "../../components/card/Card";
import storage from "../../firebase";
import Moment from "moment";
import { MyInformationsContext } from "../../context/myInformationsContext/MyInformationsContext";
import {
  getMyInformations,
  updateMyInformations,
} from "../../context/myInformationsContext/apiCalls";
import { ToastContainer } from "react-toastify";
import notifySuccess from "../../components/notify/notifySuccess";
import notifyError from "../../components/notify/notifyError";
import userAvatr from "../../assets/images/user/user.png";

export default function AdminManagementAccount() {
  const [profilePicture, setProfilePicture] = useState(null);
  const [, setUploaded] = useState(0);

  const { user, dispatchMyInformations } = useContext(MyInformationsContext);

  const [userInfo, setUserInfo] = useState(user);

  useEffect(() => {
    getMyInformations(dispatchMyInformations);
  }, [dispatchMyInformations]);

  const handleChange = (e) => {
    const value = e.target.value;
    setUserInfo({ ...userInfo, [e.target.name]: value });
  };

  const upload = (items) => {
    items.forEach((item) => {
      const fileName =
        Moment(new Date().getTime()).format("HH:mm:ss") +
        " - " +
        item.file.name;
      const uploadTask = storage.ref(`/admin-files/${fileName}`).put(item.file);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
        },
        (error) => {
          console.log(error);
          notifyError("Fișierele media nu au putut fi încărcate.");
        },
        () => {
          uploadTask.snapshot.ref.getDownloadURL().then((url) => {
            setProfilePicture((prev) => {
              return { ...prev, [item.label]: url };
            });
            setUploaded((prev) => prev + 1);
            notifySuccess(
              "Fișierul " + item.file.name + " a fost încărcat cu succes."
            );
          });
        }
      );
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateMyInformations(user._id, dispatchMyInformations);
  };

  const handleSubmitProfilePicture = (e) => {
    e.preventDefault();
    upload([{ file: profilePicture, label: "profilePicture" }]);
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
                        {/* Edit image pencil line */}
                        <div className="p-image">
                          <input
                            className="file-upload"
                            type="file"
                            id="file"
                            onChange={(e) =>
                              setProfilePicture(e.target.files[0])
                            }
                          />
                          <label htmlFor="file" style={{ cursor: "pointer" }}>
                            <i
                              className="ri-pencil-line upload-button"
                              style={{ color: "white" }}
                            ></i>
                          </label>
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
                        <Button
                          type="submit"
                          variant="primary"
                          className="mr-2"
                          onClick={handleSubmitProfilePicture}
                        >
                          Încarcă poza de profil
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
      <ToastContainer />
    </>
  );
}
