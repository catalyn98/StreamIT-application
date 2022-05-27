import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import user from "../../assets/images/user/user.png";

export default function UserProfile() {
  return (
    <>
      <section className="m-profile setting-wrapper">
        <Container>
          <h4 className="main-title mb-4">Vizualizare profil</h4>
          <Row>
            {/* First column */}
            <Col lg="3" className="mb-3">
              <div className="sign-user_card text-center">
                <img
                  src={user}
                  className="rounded-circle img-fluid d-block mx-auto mb-3"
                  alt="user"
                />
              </div>
            </Col>
            {/* Second column */}
            <Col lg="8">
              <div className="sign-user_card">
                <h5 className="mb-3 pb-3 a-border">Informații personale</h5>
                {/* First name */}
                <Row className="row align-items-center justify-content-between mb-3">
                  <Col md="8">
                    <span className="text-light font-size-13">Nume</span>
                    <p className="mb-0">Cătălan</p>
                  </Col>
                </Row>
                {/* Last name */}
                <Row className="row align-items-center justify-content-between mb-3">
                  <Col md="8">
                    <span className="text-light font-size-13">Prenume</span>
                    <p className="mb-0">Cătălin</p>
                  </Col>
                </Row>
                {/* Email address */}
                <Row className="row align-items-center justify-content-between mb-3">
                  <Col md="8">
                    <span className="text-light font-size-13">
                      Adresă de email
                    </span>
                    <p className="mb-0">catalin_catalan@gmail.com</p>
                  </Col>
                </Row>
                {/* Username */}
                <Row className="align-items-center justify-content-between mb-3">
                  <Col md="8">
                    <span className="text-light font-size-13">
                      Nume de utilizator
                    </span>
                    <p className="mb-0">catalyn98</p>
                  </Col>
                </Row>
                {/* Phone number */}
                <Row className="align-items-center justify-content-between">
                  <Col md="8">
                    <span className="text-light font-size-13">
                      Număr de telefon
                    </span>
                    <p className="mb-0">(+40)737 728 737</p>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
