import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Moment from "moment";

export default function MovieItem({ item }) {
  const [, setItemMovie] = useState({});

  useEffect(() => {
    const getMovies = async () => {
      try {
        const res = await axios.get("/movie/find/" + item._id, {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjlhOGU1MDkzNjA2ZjhiYzQ2ZjZjYTkiLCJpYXQiOjE2NTQ0MTM0MjZ9.4ing-OKSxWow1iiME3BshJ0Xd_gZEMlv_nnSoda4mkk",
          },
        });
        setItemMovie(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getMovies();
  }, [item]);

  return (
    <>
      <Link
        to={{ pathname: "/movie-details", movie: item }}
        className="iq-sub-card"
      >
        <div className="media align-items-center">
          {/* Movie thumbnail */}
          <img
            src={item.image}
            className="img-fluid mr-3"
            alt="streamit"
            style={{ maxHeight: 50 }}
          />
          <div className="media-body">
            {/* Movie name */}
            <h6 className="mb-0" style={{ color: "red" }}>
              {item.title}
            </h6>
            {/* Created at */}
            <small className="font-size-12">
              {Moment(item.createdAt).format("DD/MM/YYYY, HH:mm")}
            </small>
          </div>
        </div>
      </Link>
    </>
  );
}
