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
