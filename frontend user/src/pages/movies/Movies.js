import React, { useEffect, useState } from "react";
import axios from "axios";
import MoviesCarousel from "../../components/moviesCarousel/MoviesCarousel";
import ListMovies from "../../components/movies/ListMovies";
import DropdownGenre from "../../components/movies/DropdownGenre";

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
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjlhOGU1MDkzNjA2ZjhiYzQ2ZjZjYTkiLCJpYXQiOjE2NTQ0MTM0MjZ9.4ing-OKSxWow1iiME3BshJ0Xd_gZEMlv_nnSoda4mkk",
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
      <MoviesCarousel />
      <DropdownGenre setGenre={setGenre} />
      {lists?.map((list, index) => (
        <ListMovies key={index} list={list} />
      ))}
    </>
  );
}
