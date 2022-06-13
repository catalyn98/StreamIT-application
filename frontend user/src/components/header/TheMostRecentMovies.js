import React, { useEffect, useState } from "react";
import axios from "axios";
import MovieItem from "./MovieItem";

export default function TheMostRecentMovies() {
  const [recentMovies, setRecentMovies] = useState([]);

  useEffect(() => {
    const getRecentMovies = async () => {
      try {
        const res = await axios.get("/movie/?new=true/", {
          headers: {
            Authorization:
              "Bearer " + JSON.parse(localStorage.getItem("user")).token,
          },
        });
        setRecentMovies(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getRecentMovies();
  }, []);
  return (
    <>
      {/* Movies item  */}
      {recentMovies?.map((item, index) => (
        <MovieItem key={index} item={item} />
      ))}
    </>
  );
}
