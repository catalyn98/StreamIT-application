import React, { useState } from "react";
import Axios from "axios";
import { Container, Button, Row, Col, Form } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import notifySuccess from "../../components/notify/notifySuccess";
import notifyError from "../../components/notify/notifyError";

export default function Register() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const history = useHistory();

  const handleFinish = async (e) => {
    e.preventDefault();
    if (firstName.length < 3) {
      notifyError("Numele trebuie să conțină minim 3 caractere.");
    } else if (lastName.length < 3) {
      notifyError("Prenumele trebuie să conțină minim 3 caractere.");
    } else if (email.length < 5) {
      notifyError("Adresa de email trebuie să conțină minim 5 caractere.");
    } else if (username.length < 5) {
      notifyError("Numele de utilizator trebuie să conțină minim 5 caractere.");
    } else if (phoneNumber.length !== 10) {
      notifyError("Numărul de telefon trebuie să conțină exact 10 numere.");
    } else if (password.length < 8) {
      notifyError("Parola trebuie să conțină minim 8 caractere.");
    } else {
      Axios.post("/user/register/", {
        email,
        username,
        password,
        firstName,
        lastName,
        phoneNumber,
      })
        .then((res) => {
          if (res.status === 201) {
            notifySuccess(
              "Contul tău a fost creat cu succes! Te rugăm loghează-te în aplicație."
            );
            setTimeout(() => {
              history.push("/login");
            }, 6000);
          }
        })
        .catch(() =>
          notifyError(
            "Contul tău nu a putut fi creat. Adresa de email, numele de utilizator, sau numărul de telefon aparțin deja altui utilizator."
          )
        );
    }
  };

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
                        {/* Input first name */}
                        <Col md="6">
                          <Form.Group>
                            <Form.Label>Nume</Form.Label>
                            <input
                              type="text"
                              className="mb-0"
                              id="firstName"
                              placeholder="Tastează nume"
                              autoComplete="off"
                              onChange={(e) => {
                                setFirstName(e.target.value);
                              }}
                              required
                            />
                          </Form.Group>
                        </Col>
                        {/* Input last name */}
                        <Col md="6">
                          <Form.Group>
                            <Form.Label>Prenume</Form.Label>
                            <input
                              type="email"
                              className="mb-0"
                              id="lastName"
                              placeholder="Tastează prenume"
                              autoComplete="off"
                              onChange={(e) => {
                                setLastName(e.target.value);
                              }}
                              required
                            />
                          </Form.Group>
                        </Col>
                        {/* Input email address */}
                        <Col md="6">
                          <Form.Group>
                            <Form.Label>Adresă de email</Form.Label>
                            <input
                              type="email"
                              className="mb-0"
                              id="emailAddress"
                              placeholder="Tastează adresa de email"
                              autoComplete="off"
                              onChange={(e) => {
                                setEmail(e.target.value);
                              }}
                              required
                            />
                          </Form.Group>
                        </Col>
                        {/* Input username */}
                        <Col md="6">
                          <Form.Group>
                            <Form.Label>Nume de utilizator</Form.Label>
                            <input
                              type="text"
                              className="form-control mb-0"
                              id="username"
                              placeholder="Tastează nume de utilizator"
                              autoComplete="off"
                              onChange={(e) => {
                                setUsername(e.target.value);
                              }}
                              required
                            />
                          </Form.Group>
                        </Col>
                        {/* Input Password */}
                        <Col md="6">
                          <Form.Group>
                            <Form.Label>Număr de telefon</Form.Label>
                            <input
                              type="text"
                              className="mb-0"
                              id="phoneNumber"
                              placeholder="Tastează număr de telefon"
                              autoComplete="on"
                              onChange={(e) => {
                                setPhoneNumber(e.target.value);
                              }}
                              required
                            />
                          </Form.Group>
                        </Col>
                        {/* Input repeat password */}
                        <Col md="6">
                          <Form.Group>
                            <Form.Label>Parolă</Form.Label>
                            <input
                              type="password"
                              className="mb-0"
                              id="password"
                              placeholder="Tastează parola"
                              autoComplete="on"
                              onChange={(e) => {
                                setPassword(e.target.value);
                              }}
                              required
                            />
                          </Form.Group>
                        </Col>
                      </Row>
                    </Form>
                    {/* Register button */}
                    <Link to="/">
                      <div className="sign-info">
                        <Button
                          className="btn btn-hover btn-primary1"
                          onClick={handleFinish}
                        >
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
                      to="/login"
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
      <ToastContainer />
    </>
  );
}
