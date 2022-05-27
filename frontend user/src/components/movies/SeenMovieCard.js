import React from "react";
import { Link } from "react-router-dom";
import { Col } from "react-bootstrap";
import thumbnail from "../../assets/images/episodes/01.jpg";

export default function SeenMovieCard() {
  return (
    <>
      <Col md="3" className="col-1-3 iq-mb-30">
        <div className="epi-box">
          <div className="epi-img position-relative">
            {/* Movie image */}
            <img src={thumbnail} className="img-fluid img-zoom" alt="" />
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
            <Link to="#">
              <p className="epi-name text-white mb-0" style={{ fontSize: 25 }}>
                Titlu film
              </p>
            </Link>
            {/* Date & time */}
            <div className="d-flex align-items-center justify-content-between">
              <span className="text-primary" style={{ fontSize: 18 }}>
                data & ora
              </span>
            </div>
          </div>
        </div>
      </Col>
    </>
  );
}
