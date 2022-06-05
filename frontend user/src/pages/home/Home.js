import React, { useEffect, useState } from "react";
import axios from "axios";
import Banner from "../../components/banners/BannerHomePage";
import ListMovies from "../../components/movies/ListMovies";
import ParallaxHomePage from "../../components/parallax/ParallaxHomePage";
import AnnouncedMovies from "../../components/announcedMovies/AnnouncedMovies";

export default function Home() {
  const [lists, setLists] = useState([]);

  useEffect(() => {
    const getRandomLists = async () => {
      try {
        const res = await axios.get("categories-movies/", {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjliZTdkNTQyMTc4YzU2ODczNzAxMzEiLCJpYXQiOjE2NTQzODg3Nzd9.AYFpNADW9wAirr9xAoln8mfyqiHvjChvPz5Z9Hclwbs",
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
    <div>
      <Banner />
      {lists?.map((list, index) => {
        if (index >= 2) return null;
        return <ListMovies key={index} list={list} />;
      })}
      <ParallaxHomePage />
      <AnnouncedMovies />
    </div>
  );
}
