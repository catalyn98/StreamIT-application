import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
import { MyInformationsContext } from "../../context/myInformationsContext/MyInformationsContext";
import { getMyInformations } from "../../context/myInformationsContext/apiCalls";
import { addMovieToWatchedMovies } from "../../context/myInformationsContext/apiCalls";
import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import placeholderMovie from "../../assets/images/movie-thumb/placeholderMovie.jpg";

export default function AllMoviesCard({ item }) {
  const [, setMovie] = useState({});
  const { user, dispatchUser } = useContext(MyInformationsContext);

  useEffect(() => {
    getMyInformations(dispatchUser);
    const getMovie = async () => {
      try {
        const res = await axios.get("/movie/find/" + item._id, {
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
    <>
      <Col md="3" className="col-1-3 iq-mb-30">
        <div className="epi-box">
          <div className="epi-img position-relative">
            {/* Movie image */}
            <img
              src={item.image || placeholderMovie}
              className="img-fluid img-zoom"
              alt=""
            />
            <div className="episode-play-info">
              <div className="episode-play">
                <Link
                  onClick={() => handeleAddMovieToWatchedMovies(item._id)}
                  to={{ pathname: "/movie-details/" + item.title, movie: item }}
                >
                  <i className="ri-play-fill"></i>
                </Link>
              </div>
            </div>
          </div>
          <div className="epi-desc p-3">
            {/* Movie title */}
            <p className="epi-name text-white mb-0" style={{ fontSize: 25 }}>
              {item.title}
            </p>
            <div className="movie-time d-flex align-items-center my-2 iq-ltr-direction">
              {/* Limit age */}
              <div className="badge badge-secondary p-1 mr-2">
                {item.limitAge}
              </div>
              {/* Duration */}
              <span className="text-white">{item.duration}</span>
            </div>
          </div>
        </div>
      </Col>
    </>
  );
}
