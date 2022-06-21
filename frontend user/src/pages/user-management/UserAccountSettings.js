import React, { useState, useContext, useEffect } from "react";
import { MyInformationsContext } from "../../context/myInformationsContext/MyInformationsContext";
import {
  getMyInformations,
  updateMyInformations,
} from "../../context/myInformationsContext/apiCalls";
import Moment from "moment";
import storage from "../../firebase";
import notifyError from "../../components/notify/notifyError";
import notifySuccess from "../../components/notify/notifySuccess";
import Header from "../../components/header/Header";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Footer from "../../components/footer/Footer";
import { ToastContainer } from "react-toastify";
import userAvatar from "../../assets/images/user/user.png";

export default function UserAccountSettings() {
  const [profilePicture, setProfilePicture] = useState(null);
  const [, setUploaded] = useState(0);
  const { user, dispatchUser } = useContext(MyInformationsContext);
  const [userInfo, setUserInfo] = useState(user);

  useEffect(() => {
    getMyInformations(dispatchUser);
  }, [dispatchUser]);

  const handleChange = (e) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateMyInformations(user._id, userInfo, dispatchUser);
  };

  const upload = (items) => {
    items.forEach((item) => {
      const fileName =
        Moment(new Date().getTime()).format("HH:mm:ss") +
        " - " +
        item.file.name;
      const uploadTask = storage.ref(`/users-files/${fileName}`).put(item.file);
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
            setUserInfo({ ...userInfo, [item.label]: url });
            setUploaded((prev) => prev + 1);
            notifySuccess(
              "Fișierul " + item.file.name + " a fost încărcat cu succes."
            );
          });
        }
      );
    });
  };

  const handleSubmitProfilePicture = (e) => {
    e.preventDefault();
    upload([{ file: profilePicture, label: "profilePicture" }]);
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
                        src={userInfo.profilePicture || userAvatar}
                        className="profile-pic avatar-130 rounded-circle img-fluname"
                        alt="user"
                      />
                      {/* Edit image pencil line */}
                      <div className="p-image">
                        <input
                          name="profilePicture"
                          className="file-upload"
                          type="file"
                          id="profilePicture"
                          onChange={(e) => setProfilePicture(e.target.files[0])}
                        />
                        <label
                          htmlFor="profilePicture"
                          style={{ cursor: "pointer" }}
                        >
                          <i
                            className="ri-pencil-line upload-button"
                            style={{ color: "white" }}
                          ></i>
                        </label>
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
                                autoComplete="off"
                                value={userInfo.firstName}
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
                                autoComplete="off"
                                value={userInfo.lastName}
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
                                autoComplete="off"
                                value={userInfo.email}
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
                                autoComplete="off"
                                value={userInfo.username}
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
                                value={userInfo.phoneNumber}
                                type="text"
                                className="form-control mb-0"
                                name="phoneNumber"
                                autoComplete="off"
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
                                autoComplete="off"
                                placeholder="*****"
                                onChange={handleChange}
                                required
                              />
                            </Form.Group>
                          </Col>
                        </Row>
                        <Link to="/">
                          <Button
                            type="button"
                            variant="btn btn-primary"
                            className="mr-2"
                            style={{
                              backgroundColor: "red",
                              borderColor: "red",
                              padding: 10,
                            }}
                            onClick={handleSubmit}
                          >
                            Actualizează
                          </Button>
                        </Link>
                        <Link to="/">
                          <Button
                            type="submit"
                            variant="btn btn-primary"
                            className="mr-2"
                            style={{
                              backgroundColor: "red",
                              borderColor: "red",
                              padding: 10,
                            }}
                            onClick={handleSubmitProfilePicture}
                          >
                            Încarcă poza
                          </Button>
                        </Link>
                        <Link to="/user-profile">
                          <Button
                            type="reset"
                            variant="btn iq-bg-danger"
                            style={{
                              backgroundColor: "white",
                              borderColor: "white",
                              padding: 10,
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
      <ToastContainer />
    </>
  );
}
