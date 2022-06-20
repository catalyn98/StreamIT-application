import React, { useState, useContext, useEffect } from "react";
import { MyInformationsContext } from "../../context/myInformationsContext/MyInformationsContext";
import { getMyInformations } from "../../context/myInformationsContext/apiCalls";
import { addMovieToWatchedMovies } from "../../context/myInformationsContext/apiCalls";
import axios from "axios";
import { Link } from "react-router-dom";
import SwiperCore, { EffectFade, Navigation, Thumbs, Pagination } from "swiper";
import "swiper/swiper-bundle.css";
import placeholderMovie from "../../assets/images/movie-thumb/placeholderMovie.jpg";
SwiperCore.use([EffectFade, Navigation, Thumbs, Pagination]);

export default function MovieCard({ item }) {
  const [movie, setMovie] = useState({});
  const { user, dispatchUser } = useContext(MyInformationsContext);

  useEffect(() => {
    getMyInformations(dispatchUser);
    const getMovie = async () => {
      try {
        const res = await axios.get("/movie/find/" + item, {
          headers: {
            Authorization:
              "Bearer " + JSON.parse(localStorage.getItem("user")).token,
          },
        });
        setMovie(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getMovie();
  }, [item, dispatchUser]);

  const handeleAddMovieToWatchedMovies = (movieId) => {
    addMovieToWatchedMovies(movieId, user, dispatchUser);
  };

  return (
    <div className=" block-images position-relative">
      {/* Image thumbnail */}
      <div className="img-box">
        <img
          src={movie.image || placeholderMovie}
          className="img-fluid"
          alt=""
        />
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
            onClick={() => handeleAddMovieToWatchedMovies(movie._id)}
            to={{ pathname: "/movie-details/" + movie.title, movie: movie }}
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
