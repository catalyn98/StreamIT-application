import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "../../components/header/Header";
import BannerPages from "../../components/banners/BannerPages";
import { Container, Row } from "react-bootstrap";
import AllMoviesCard from "../../components/allMovies/AllMoviesCard";
import Footer from "../../components/footer/Footer";

export default function AllMovies() {
  const [movie, setMovie] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const getAllMovies = async () => {
      try {
        const res = await axios.get("/movie/", {
          headers: {
            Authorization:
              "Bearer " + JSON.parse(localStorage.getItem("user")).token,
          },
        });
        setMovie(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getAllMovies();
  }, []);

  return (
    <>
      <Header />
      <BannerPages pageName="Toate filmele" />
      <div className="main-content">
        <section id="iq-favorites">
          <Container fluid>
            <div className="block-space">
              <form
                method="get"
                className="search-form"
                action="#"
                style={{ width: 395, paddingBottom: 15 }}
              >
                <label>
                  <span className="input-group screen-reader-text">
                    Search for:
                  </span>
                </label>
                <input
                  type="search"
                  style={{ color: "white" }}
                  className="search-field search__input"
                  placeholder="Caută film după nume"
                  name="search"
                  onChange={(event) => setQuery(event.target.value)}
                />
                <button type="submit" className="search-submit">
                  <i className="ri-search-line"></i>
                  <span className="screen-reader-text">
                    Caută film după nume
                  </span>
                </button>
              </form>
              <Row>
                {movie
                  .filter((item) => {
                    if (query === "") {
                      return item;
                    } else if (
                      item.title.toLowerCase().includes(query.toLowerCase())
                    ) {
                      return item;
                    }
                    return false;
                  })
                  ?.map((item, index) => (
                    <AllMoviesCard key={index} item={item} />
                  ))}
              </Row>
            </div>
          </Container>
        </section>
      </div>
      <Footer />
    </>
  );
}
