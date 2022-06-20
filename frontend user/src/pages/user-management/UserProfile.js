import React, { useContext, useEffect } from "react";
import { MyInformationsContext } from "../../context/myInformationsContext/MyInformationsContext";
import { getMyInformations } from "../../context/myInformationsContext/apiCalls";
import { Container, Row, Col } from "react-bootstrap";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import userAvatar from "../../assets/images/user/user.png";

export default function UserProfile() {
  const { user, dispatchUser } = useContext(MyInformationsContext);

  useEffect(() => {
    getMyInformations(dispatchUser);
  }, [dispatchUser]);

  return (
    <>
      <Header />
      {user && (
        <section className="m-profile setting-wrapper">
          <Container>
            <h4 className="main-title mb-4">Vizualizare profil</h4>
            <Row>
              {/* First column */}
              <Col lg="3" className="mb-3">
                <div className="sign-user_card text-center">
                  <img
                    src={user.profilePicture || userAvatar}
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
                      <p className="mb-0">{user.firstName}</p>
                    </Col>
                  </Row>
                  {/* Last name */}
                  <Row className="row align-items-center justify-content-between mb-3">
                    <Col md="8">
                      <span className="text-light font-size-13">Prenume</span>
                      <p className="mb-0">{user.lastName}</p>
                    </Col>
                  </Row>
                  {/* Email address */}
                  <Row className="row align-items-center justify-content-between mb-3">
                    <Col md="8">
                      <span className="text-light font-size-13">
                        Adresă de email
                      </span>
                      <p className="mb-0">{user.email}</p>
                    </Col>
                  </Row>
                  {/* Username */}
                  <Row className="align-items-center justify-content-between mb-3">
                    <Col md="8">
                      <span className="text-light font-size-13">
                        Nume de utilizator
                      </span>
                      <p className="mb-0">{user.username}</p>
                    </Col>
                  </Row>
                  {/* Phone number */}
                  <Row className="align-items-center justify-content-between">
                    <Col md="8">
                      <span className="text-light font-size-13">
                        Număr de telefon
                      </span>
                      <p className="mb-0">{user.phoneNumber}</p>
                    </Col>
                  </Row>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      )}
      <Footer />
    </>
  );
}
