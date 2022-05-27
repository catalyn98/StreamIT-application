import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import picture1 from "../../assets/images/about-us/tv.png";
import picture2 from "../../assets/images/about-us/device-pile.png";
import picture3 from "../../assets/images/about-us/kidsValueProp.png";

export default function TextPromo() {
  return (
    <>
      <Container fluid className="p-0">
        {/* First row */}
        <div
          className="map-container firstElelement"
          style={{ backgroundColor: "black" }}
        >
          <Container>
            <Row className="about-us-row text-center align-items-center">
              {/* First column */}
              <Col md="5">
                <div className="text-center">
                  <img
                    width="1000"
                    height="1000"
                    src={picture1}
                    className=" img-fluid attachment-large size-large"
                    alt=""
                    loading="lazy"
                    sizes="100vw"
                  />
                </div>
              </Col>
              {/* Second column */}
              <Col md="7">
                <div className="text-left iq-title-box iq-title-default">
                  <h3 className="iq-title">Vizionare pe TV</h3>
                  <p className="iq-title-desc" style={{ fontSize: 23 }}>
                    Vizionează filmele tale preferate pe Smart TV, Playstation,
                    Xbox, Chromecast, Apple TV, playere Blu-ray și altele.
                    StreamIT îți aduce magia cinematografiei la tine acasă.
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        {/* Second row */}
        <div
          className="map-container secondElelement"
          style={{ backgroundColor: "black" }}
        >
          <Container>
            <Row className="about-us-row text-center align-items-center">
              {/* First column */}
              <Col md="7">
                <div className="text-left iq-title-box iq-title-default">
                  <h3 className="iq-title">Vizionează oriunde și oricând</h3>
                  <p className="iq-title-desc" style={{ fontSize: 23 }}>
                    Vizionează nelimitat filmele tale favorite pe telefon,
                    tabletă, laptop și televizor, fără nici un fel de costuri.
                    Serviciul nostru de streaming este 100% gratuit.
                  </p>
                </div>
              </Col>
              {/* Second column */}
              <Col md="5">
                <div className="text-center">
                  <img
                    width="1000"
                    height="1000"
                    src={picture2}
                    className=" img-fluid attachment-large size-large"
                    alt=""
                    loading="lazy"
                    sizes="100vw"
                  />
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        {/* Third row */}
        <div className="map-container" style={{ backgroundColor: "black" }}>
          <Container>
            <Row className="about-us-row text-center align-items-center">
              {/* First column */}
              <Col md="5">
                <div className="text-center">
                  <img
                    width="1000"
                    height="1000"
                    src={picture3}
                    className=" img-fluid attachment-large size-large"
                    alt=""
                    loading="lazy"
                    sizes="100vw"
                  />
                </div>
              </Col>
              {/* Second column */}
              <Col md="7">
                <div className="text-left iq-title-box iq-title-default">
                  <h3 className="iq-title">
                    Vizionează filme împreună cu copii
                  </h3>
                  <p className="iq-title-desc" style={{ fontSize: 23 }}>
                    Trimite copiii în aventuri alături de personajele favorite,
                    într-un spațiu creat special pentru ei.
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </Container>
    </>
  );
}
