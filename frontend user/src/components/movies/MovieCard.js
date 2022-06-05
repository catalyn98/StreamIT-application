import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import SwiperCore, { EffectFade, Navigation, Thumbs, Pagination } from "swiper";
import "swiper/swiper-bundle.css";
SwiperCore.use([EffectFade, Navigation, Thumbs, Pagination]);

export default function MovieCard({ item }) {
  const [movie, setMovie] = useState({});

  useEffect(() => {
    const getMovie = async () => {
      try {
        const res = await axios.get("/movie/find/" + item, {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjliZTdkNTQyMTc4YzU2ODczNzAxMzEiLCJpYXQiOjE2NTQzODg3Nzd9.AYFpNADW9wAirr9xAoln8mfyqiHvjChvPz5Z9Hclwbs",
          },
        });
        setMovie(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getMovie();
  }, [item]);

  return (
    <div className=" block-images position-relative">
      {/* Image thumbnail */}
      <div className="img-box">
        <img src={movie.image} className="img-fluid" alt="" />
      </div>
      {/* Movie title, limit age, duration & see movie */}
      <div className="block-description">
        {/* Movie title */}
        <h6 className="iq-title">
          <Link to="/movie-details">{movie.title}</Link>
        </h6>
        <div className="movie-time d-flex align-items-center my-2 iq-ltr-direction">
          {/* Limit age */}
          <div className="badge badge-secondary p-1 mr-2">{movie.limitAge}</div>
          {/* Duration */}
          <span className="text-white">{movie.duration}</span>
        </div>
        {/* See movie */}
        <div className="hover-buttons">
          <Link
            to={{ pathname: "/movie-details", movie: movie }}
            role="button"
            className="btn btn-hover iq-button"
          >
            Vizionează
          </Link>
        </div>
      </div>
      <div className="block-social-info">
        <ul className="list-inline p-0 m-0 music-play-lists">
          {/* Share button */}
          <li className="share">
            <span>
              <i className="ri-share-fill"></i>
            </span>
          </li>
          {/* Heart button */}
          <li>
            <span>
              <i className="ri-heart-fill"></i>
            </span>
          </li>
          {/* Add button */}
          <li>
            <span>
              <i className="ri-add-line"></i>
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}
