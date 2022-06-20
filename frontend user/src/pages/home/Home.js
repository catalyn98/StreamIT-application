import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "../../components/header/Header";
import Banner from "../../components/banners/BannerHomePage";
import ListMovies from "../../components/movies/ListMovies";
import ParallaxHomePage from "../../components/parallax/ParallaxHomePage";
import AnnouncedMovies from "../../components/announcedMovies/AnnouncedMovies";
import Footer from "../../components/footer/Footer";

export default function Home() {
  const [lists, setLists] = useState([]);

  useEffect(() => {
    const getRandomLists = async () => {
      try {
        const res = await axios.get("/categories-movies/", {
          headers: {
            Authorization:
              "Bearer " + JSON.parse(localStorage.getItem("user")).token,
          },
        });
        setLists(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getRandomLists();
  }, []);

  return (
    <>
      <Header />
      <Banner />
      {lists?.map((list, index) => {
        if (index >= 2) return null;
        return <ListMovies key={index} list={list} />;
      })}
      <ParallaxHomePage />
      <AnnouncedMovies />
      <Footer />
    </>
  );
}
