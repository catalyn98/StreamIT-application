import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Header from "../../components/header/Header";
import SeenMovieCard from "../../components/movies/SeenMovieCard";
import Footer from "../../components/footer/Footer";

export default function SeenMovies() {
  return (
    <>
      <Header />
      <div className="main-content" style={{ paddingTop: 60 }}>
        <section id="iq-favorites">
          <Container fluid>
            <div className="block-space">
              <Row>
                <Col sm="12" className="overflow-hidden">
                  <div className="iq-main-header d-flex align-items-center justify-content-between">
                    <h4 className="main-title">Filme vizualizate</h4>
                  </div>
                </Col>
              </Row>
              <Row>
                <SeenMovieCard />
                <SeenMovieCard />
                <SeenMovieCard />
                <SeenMovieCard />
                <SeenMovieCard />
                <SeenMovieCard />
                <SeenMovieCard />
                <SeenMovieCard />
                <SeenMovieCard />
                <SeenMovieCard />
              </Row>
            </div>
          </Container>
        </section>
      </div>
      <Footer />
    </>
  );
}
