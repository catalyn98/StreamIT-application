import React from "react";
import { useContext, useEffect } from "react";
import { MyInformationsContext } from "../../context/myInformationsContext/MyInformationsContext";
import { MovieContext } from "../../context/movieContext/MovieContext";
import { getMyInformations } from "../../context/myInformationsContext/apiCalls";
import { getMovies } from "../../context/movieContext/apiCalls";
import Header from "../../components/header/Header";
import { Container, Row, Col } from "react-bootstrap";
import SeenMovieCard from "../../components/movies/SeenMovieCard";
import Footer from "../../components/footer/Footer";

export default function SeenMovies() {
  const { user, dispatchUser } = useContext(MyInformationsContext);
  const { movies, dispatch } = useContext(MovieContext);

  useEffect(() => {
    getMyInformations(dispatchUser);
    getMovies(dispatch);
  }, [dispatch, dispatchUser]);

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
                    <h4 className="main-title">Filme vizionate</h4>
                  </div>
                </Col>
              </Row>
              <Row>
                {user.seenMovies
                  ?.map((el) =>
                    movies
                      .filter((movie) => movie._id === el)
                      .map((e, i) => (
                        <SeenMovieCard
                          key={i}
                          title={e.title}
                          img={e.image}
                          duration={e.duration}
                          limitAge={e.limitAge}
                        />
                      ))
                  )
                  .slice(0, 10)}
              </Row>
            </div>
          </Container>
        </section>
      </div>
      <Footer />
    </>
  );
}
