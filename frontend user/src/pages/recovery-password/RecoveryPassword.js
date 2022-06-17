import React, { useState } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import { ToastContainer } from "react-toastify";
import notifyError from "../../components/notify/notifyError";
import notifySuccess from "../../components/notify/notifySuccess";

export default function RecoveryPassword() {
  const [email, setEmail] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    if (email.length === 0) {
      notifyError("Tastează adresa de email.");
    } else {
      Axios.post("/user/reset-password", { email })
        .then((res) => {
          if (res.status === 200) {
            notifySuccess(
              "Un email cu instrucțiunile de resetare a fost trimis la adresa " +
                email +
                "."
            );
            const inputs = document.querySelectorAll("#email");
            inputs.forEach((input) => {
              input.value = "";
            });
          }
        })
        .catch(() =>
          notifyError("Această adresă de email nu este asociată niciunui cont.")
        );
    }
  };

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
                          id="email"
                          placeholder="Tastează adresa de email"
                          autoComplete="off"
                          required
                          onChange={(e) => {
                            setEmail(e.target.value);
                          }}
                        />
                      </div>
                      <div className="sign-info">
                        {/* Reset button */}
                        <Button
                          className="btn btn-primary mt-2"
                          style={{ backgroundColor: "red", borderColor: "red" }}
                          onClick={sendEmail}
                        >
                          Resetează
                        </Button>{" "}
                        {/* Cancel button */}
                        <Link to="/login">
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
      <ToastContainer />
    </>
  );
}
