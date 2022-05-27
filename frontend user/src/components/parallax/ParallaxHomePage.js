import React from "react";
import { Link } from "react-router-dom";
import { Container, Col, Row } from "react-bootstrap";
import SwiperCore, { EffectFade, Navigation, Thumbs, Pagination } from "swiper";
import "swiper/swiper-bundle.css";
import parallax from "../../assets/images/parallax/p1.jpg";
import parallaxBackground from "../../assets/images/parallax/p1_sonic.jpg";
SwiperCore.use([EffectFade, Navigation, Thumbs, Pagination]);

export default function ParallaxHomePage() {
  return (
    <>
      <section
        id="parallex"
        className="parallax-window"
        style={{ backgroundImage: `url(${parallaxBackground})` }}
      >
        <Container fluid className="h-100">
          <Row className="align-items-center justify-content-center h-100 parallaxt-details">
            {/* First column */}
            <Col lg="6" className="r-mb-23">
              <div className="text-left">
                {/* Promo title */}
                <h1
                  className="trending-text big-title text-uppercase mt-0"
                  style={{ fontSize: 50 }}
                >
                  Cinema la tine acasa!
                </h1>
                {/* Promo description */}
                <p style={{ fontSize: 19 }}>
                  Tot ce iubești, într-un singur loc - cele mai spectaculoase
                  blockbustere, cele mai îndrăznețe povești și filme clasice de
                  neuitat sunt toate acum pe StreamIT.
                </p>
                <p style={{ fontSize: 19 }}>
                  Bucură-te de titluri emblematice Warner Bros., HBO, Max
                  Originals, DC, Cartoon Network și multe altele, pentru prima
                  dată într-un singur loc.
                </p>
                <p style={{ fontSize: 19 }}>
                  Redați nelimitat filme pe telefon, tabletă, laptop și
                  televizor, fără costuri. Serviciul StreamIT este un serviciu
                  de streaming gratuit care nu necesită nici o subscripție
                  lunară!
                </p>
                {/* See more button */}
                <div className="parallax-buttons">
                  <Link
                    to="/team"
                    className="btn btn-hover"
                    style={{ fontWeight: "bold" }}
                  >
                    Informații <i className="fa fa-chevron-right"></i>
                  </Link>
                </div>
              </div>
            </Col>
            {/* Second column */}
            <Col lg="6">
              <div className="parallax-img">
                <Link to="#">
                  <img
                    src={parallax}
                    className="img-fluid w-100"
                    alt="parallax"
                  />
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
