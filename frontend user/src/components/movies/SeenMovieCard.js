import React from "react";
import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import thumbnail from "../../assets/images/episodes/01.jpg";

export default function SeenMovieCard({ title, img, duration, limitAge }) {
  return (
    <>
      <Col md="3" className="col-1-3 iq-mb-30">
        <div className="epi-box">
          <div className="epi-img position-relative">
            {/* Movie image */}
            <img src={img || thumbnail} className="img-fluid img-zoom" alt="" />
            <div className="episode-play-info">
              <div className="episode-play">
                <Link to="#">
                  <i className="ri-play-fill"></i>
                </Link>
              </div>
            </div>
          </div>
          <div className="epi-desc p-3">
            {/* Movie title */}
            <p className="epi-name text-white mb-0" style={{ fontSize: 25 }}>
              {title}
            </p>
            <div className="movie-time d-flex align-items-center my-2 iq-ltr-direction">
              {/* Limit age */}
              <div className="badge badge-secondary p-1 mr-2">{limitAge}</div>
              {/* Duration */}
              <span className="text-white">{duration}</span>
            </div>
          </div>
        </div>
      </Col>
    </>
  );
}
