import React, { useEffect, useState } from "react";
import axios from "axios";
import MoviesCarousel from "../../components/moviesCarousel/MoviesCarousel";
import ListMovies from "../../components/movies/ListMovies";
import DropdownGenre from "../../components/movies/DropdownGenre";

export default function Movies() {
  const [lists, setLists] = useState([]);

  useEffect(() => {
    const getRandomLists = async () => {
      try {
        const res = await axios.get("categories-movies/", {
          headers: {
            token:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyN2JkNGU1ZDM4MWJlMzlkZDY5ZWMxYSIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE2NTI3NzcwMzMsImV4cCI6MTY1NTM2OTAzM30.LOXNcUtdISTsdPoTH22bIgD2ipyr1XgHVhovLQVhgdY",
          },
        });
        setLists(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getRandomLists();
  }, []);

  return (
    <>
      <MoviesCarousel />
      <DropdownGenre />
      {lists?.map((list, index) => (
        <ListMovies key={index} list={list} />
      ))}
    </>
  );
}
