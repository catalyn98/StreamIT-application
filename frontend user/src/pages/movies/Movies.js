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
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjliZTdkNTQyMTc4YzU2ODczNzAxMzEiLCJpYXQiOjE2NTQzODg3Nzd9.AYFpNADW9wAirr9xAoln8mfyqiHvjChvPz5Z9Hclwbs",
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
