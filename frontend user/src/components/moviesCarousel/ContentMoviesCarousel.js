import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import SwiperCore, { EffectFade, Navigation, Thumbs, Pagination } from "swiper";
import "swiper/swiper-bundle.css";
SwiperCore.use([EffectFade, Navigation, Thumbs, Pagination]);

export default function ContentMoviesCarousel(props) {
  return (
    <>
      <Container fluid className="position-relative h-100">
        <div className="slider-inner h-100">
          <Row className="align-items-center  iq-ltr-direction h-100 ">
            <Col xl="7" lg="12" md="12">
              {/* Movie title */}
              <h1
                className="slider-text big-title title text-uppercase"
                data-iq-gsap="onStart"
                data-iq-position-x="-200"
                style={{ fontSize: 50 }}
              >
                {props.movieTitle}
              </h1>
              <div className="d-flex flex-wrap align-items-center">
                {/* Rating star */}
                <div
                  className="slider-ratting d-flex align-items-center mr-4 mt-2 mt-md-3"
                  data-iq-gsap="onStart"
                  data-iq-position-x="-200"
                  data-iq-delay="-0.5"
                >
                  <ul className="ratting-start p-0 m-0 list-inline text-primary d-flex align-items-center justify-content-left">
                    <li>
                      <i className="fa fa-star" aria-hidden="true"></i>
                    </li>
                    <li>
                      <i className="fa fa-star" aria-hidden="true"></i>
                    </li>
                    <li>
                      <i className="fa fa-star" aria-hidden="true"></i>
                    </li>
                    <li>
                      <i className="fa fa-star" aria-hidden="true"></i>
                    </li>
                    <li>
                      <i className="fa fa-star-half" aria-hidden="true"></i>
                    </li>
                  </ul>
                  <span className="text-white ml-2">{props.imbd}</span>
                </div>
                {/* Limit age & duration */}
                <div
                  className="d-flex align-items-center mt-2 mt-md-3"
                  data-iq-gsap="onStart"
                  data-iq-position-x="-200"
                  data-iq-delay="-0.5"
                >
                  <span className="badge badge-secondary p-2">
                    {props.limitAge}
                  </span>
                  <span className="ml-3">{props.duration}</span>
                </div>
                {/* Movie description */}
                <p
                  data-iq-gsap="onStart"
                  data-iq-position-y="80"
                  data-iq-delay="0.8"
                >
                  {props.movieDescription}
                </p>
              </div>
              {/* Director, cast, genre & tag*/}
              <div
                className="trending-list"
                data-iq-gsap="onStart"
                data-iq-position-x="-200"
                data-iq-delay="-0.5"
              >
                <div className="text-primary title starring">
                  Director: <span className="text-body">{props.director}</span>
                </div>
                <div className="text-primary title genres">
                  Distribuție: <span className="text-body">{props.cast}</span>
                </div>
                <div className="text-primary title tag">
                  Gen: <span className="text-body">{props.genre}</span>
                </div>
                <div className="text-primary title tag">
                  Tag: <span className="text-body">{props.tag}</span>
                </div>
              </div>
              {/* Buttons */}
              <div
                className="d-flex align-items-center r-mb-23"
                data-iq-gsap="onStart"
                data-iq-position-y="80"
                data-iq-delay="0.8"
              >
                <Link
                  to="#"
                  onClick={() => window.open(`${props.link}`, "_blank")}
                  className="btn btn-hover iq-button"
                >
                  <i className="fa fa-play mr-2" aria-hidden="true"></i>
                  Trailer
                </Link>
                <Link
                  to="#"
                  onClick={() => window.open(`${props.moreDetails}`, "_blank")}
                  className="btn btn-link"
                >
                  Mai multe detalii
                </Link>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </>
  );
}
