import React from "react";
import { useLocation } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import placeholderVideo from "../../assets/video/Lionsgate.mp4";
import placeholderMovie from "../../assets/images/movie-thumb/placeholderMovie.jpg"

export default function MovieDetails() {
  const location = useLocation();
  const movie = location.movie;

  return (
    <>
      <Header />
      {movie && (
        <div className="main-content movi" style={{ paddingTop: 100 }}>
          <section className="movie-detail container-fluid">
            <Row>
              <Col lg="12" style={{ paddingBottom: 30 }}>
                <div
                  className="video-container iq-main-slider sign-user_card"
                  style={{ borderRadius: 15, backgroundColor: "#141414" }}
                >
                  {/* Title movie */}
                  <h1
                    className="trending-text big-title text-uppercase mb-3 pb-3 a-border a-border mt-0"
                    style={{ fontSize: 40 }}
                  >
                    {movie.title}
                  </h1>
                  <iframe
                    src={movie.trailer || placeholderVideo}
                    frameBorder="0"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                    title="video"
                    style={{ height: 480 }}
                  />
                </div>
              </Col>
              <Col lg="12" style={{ paddingBottom: 30 }}>
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
                    <div style={{ maxWidth: "100%" }}>
                      <img
                        src={movie.image || placeholderMovie}
                        style={{
                          marginLeft: "auto",
                          marginRight: "auto",
                          dispaly: "block",
                          width: "50%",
                        }}
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
                      <h5
                        className="mb-3 pb-3 a-border"
                        style={{ color: "red" }}
                      >
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
            </Row>
          </section>
        </div>
      )}
      <Footer />
    </>
  );
}
