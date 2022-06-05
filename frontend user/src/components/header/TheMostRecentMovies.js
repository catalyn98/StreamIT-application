import React, { useEffect, useState } from "react";
import axios from "axios";
import MovieItem from "./MovieItem";

export default function TheMostRecentMovies() {
  const [recentMovies, setRecentMovies] = useState([]);

  useEffect(() => {
    const getRecentMovies = async () => {
      try {
        const res = await axios.get("movie/?new=true", {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjlhOGU1MDkzNjA2ZjhiYzQ2ZjZjYTkiLCJpYXQiOjE2NTQ0MTM0MjZ9.4ing-OKSxWow1iiME3BshJ0Xd_gZEMlv_nnSoda4mkk",
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
