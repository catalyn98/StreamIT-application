import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Header from "../../components/header/Header";
import MoviesCarousel from "../../components/moviesCarousel/MoviesCarousel";
import ListMovies from "../../components/movies/ListMovies";
import DropdownGenre from "../../components/movies/DropdownGenre";
import Footer from "../../components/footer/Footer";

export default function Movies() {
  const [lists, setLists] = useState([]);
  const [genre, setGenre] = useState(null);

  useEffect(() => {
    const getRandomLists = async () => {
      try {
        const res = await axios.get(
          `categories-movies${genre ? "?genre=" + genre : ""}`,
          {
            headers: {
              Authorization:
                "Bearer " + JSON.parse(localStorage.getItem("user")).token,
            },
          }
        );
        setLists(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getRandomLists();
  }, [genre]);

  return (
    <>
      <Header />
      <MoviesCarousel />
      <DropdownGenre setGenre={setGenre} />
      {lists?.map((list, index) => (
        <ListMovies key={index} list={list} />
      ))}
      <div
        className="parallax-buttons"
        style={{ paddingBottom: 15, paddingRight: 100, float: "right" }}
      >
        <Link
          to="/all-movies"
          className="btn btn-hover"
          style={{ fontWeight: "bold" }}
        >
          Vezi toate filmele <i className="fa fa-chevron-right"></i>
        </Link>
      </div>
      <Footer />
    </>
  );
}
