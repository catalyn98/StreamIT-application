import React from "react";
import { Row, Col } from "react-bootstrap";
import { useLocation } from "react-router-dom";

export default function MovieDetails() {
  const location = useLocation();
  const movie = location.movie;

  return (
    <>
      <div className="main-content movi" style={{ paddingTop: 100 }}>
        <section className="movie-detail container-fluid">
          <Row>
            <Col lg="6" style={{ paddingBottom: 30 }}>
              <div
                className="sign-user_card"
                style={{ backgroundColor: "#141414", borderRadius: 15 }}
              >
                <h5
                  className="mb-3 pb-3 a-border"
                  style={{ fontSize: 30, fontWeight: "bold" }}
                >
                  Informații film
                </h5>
                {/* Movie details content */}
                <div
                  className="trending-info g-border"
                  style={{ paddingBottom: 0 }}
                >
                  {/* Title movie */}
                  <h1
                    className="trending-text big-title text-uppercase mt-0"
                    style={{ fontSize: 40 }}
                  >
                    {movie.title}
                  </h1>
                  <div className=" text-center">
                    <img
                      src={movie.image}
                      className="img-fluid d-block mx-auto mb-3"
                      alt="user"
                    />
                  </div>
                  {/* Description movie */}
                  <div
                    className="text-body text-primary title genres"
                    style={{
                      fontSize: 20,
                      fontWeight: "bold",
                      paddingBottom: 40,
                    }}
                  >
                    <h5 className="mb-3 pb-3 a-border" style={{ color: "red" }}>
                      Descriere
                    </h5>
                    <span
                      className="text-body"
                      style={{ fontSize: 18, fontWeight: "normal" }}
                    >
                      {movie.description}
                    </span>
                  </div>
                  <Row>
                    {/* Cast movie */}
                    <Col lg="12">
                      <div
                        className="text-body text-primary title genres"
                        lg="6"
                        style={{
                          fontSize: 20,
                          fontWeight: "bold",
                          paddingBottom: 40,
                        }}
                      >
                        <h5
                          className="mb-3 pb-3 a-border"
                          style={{ color: "red" }}
                        >
                          Distribuție
                        </h5>
                        <span
                          className="text-body"
                          style={{ fontSize: 18, fontWeight: "normal" }}
                        >
                          {movie.cast}
                        </span>
                      </div>
                    </Col>
                    {/* Director movie */}
                    <Col lg="6">
                      <div
                        className="text-body text-primary title genres"
                        lg="6"
                        style={{
                          fontSize: 20,
                          fontWeight: "bold",
                          paddingBottom: 40,
                        }}
                      >
                        <h5
                          className="mb-3 pb-3 a-border"
                          style={{ color: "red" }}
                        >
                          Director
                        </h5>
                        <span
                          className="text-body"
                          style={{ fontSize: 18, fontWeight: "normal" }}
                        >
                          {movie.director}
                        </span>
                      </div>
                    </Col>
                    <Col lg="6">
                      {/* Genre movie */}
                      <div
                        className="text-body text-primary title genres"
                        style={{
                          fontSize: 20,
                          fontWeight: "bold",
                          paddingBottom: 40,
                        }}
                      >
                        <h5
                          className="mb-3 pb-3 a-border"
                          style={{ color: "red" }}
                        >
                          Gen
                        </h5>
                        <span
                          className="text-body"
                          style={{ fontSize: 18, fontWeight: "normal" }}
                        >
                          {movie.genre}
                        </span>
                      </div>
                    </Col>
                    <Col lg="6">
                      {/* Genre movie */}
                      <div
                        className="text-body text-primary title genres"
                        style={{
                          fontSize: 20,
                          fontWeight: "bold",
                        }}
                      >
                        <h5
                          className="mb-3 pb-3 a-border"
                          style={{ color: "red" }}
                        >
                          Limită de vârstă
                        </h5>
                        <span
                          className="text-body"
                          style={{ fontSize: 18, fontWeight: "normal" }}
                        >
                          {movie.limitAge}
                        </span>
                      </div>
                    </Col>
                    <Col lg="6">
                      {/* Genre movie */}
                      <div
                        className="text-body text-primary title genres"
                        style={{
                          fontSize: 20,
                          fontWeight: "bold",
                        }}
                      >
                        <h5
                          className="mb-3 pb-3 a-border"
                          style={{ color: "red" }}
                        >
                          Durată
                        </h5>
                        <span
                          className="text-body"
                          style={{ fontSize: 18, fontWeight: "normal" }}
                        >
                          {movie.duration}
                        </span>
                      </div>
                    </Col>
                  </Row>
                </div>
                {/* Trailer movie */}
              </div>
            </Col>
            <Col lg="6">
              <div
                className="video-container iq-main-slider sign-user_card"
                style={{ borderRadius: 15, backgroundColor: "#141414" }}
              >
                <h5
                  className="mb-3 pb-3 a-border"
                  style={{ fontSize: 30, fontWeight: "bold" }}
                >
                  Vizionează
                </h5>
                <iframe
                  src={movie.trailer}
                  frameBorder="0"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                  title="video"
                  style={{ height: 350 }}
                />
              </div>
            </Col>
          </Row>
        </section>
      </div>
    </>
  );
}
