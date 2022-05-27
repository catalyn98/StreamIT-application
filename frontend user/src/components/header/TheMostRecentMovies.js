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
            token:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyN2JkNGU1ZDM4MWJlMzlkZDY5ZWMxYSIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE2NTI3NzcwMzMsImV4cCI6MTY1NTM2OTAzM30.LOXNcUtdISTsdPoTH22bIgD2ipyr1XgHVhovLQVhgdY",
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
