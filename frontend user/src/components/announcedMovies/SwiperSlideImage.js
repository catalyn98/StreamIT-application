import React from "react";
import { Link } from "react-router-dom";
import SwiperCore, { EffectFade, Navigation, Thumbs, Pagination } from "swiper";
import "swiper/swiper-bundle.css";
SwiperCore.use([EffectFade, Navigation, Thumbs, Pagination]);

export default function SwiperSlideImage(props) {
  return (
    <>
      <Link to="#">
        <div className="movie-slick position-relative">
          <img src={props.image} className="img-fluid" alt="" />
        </div>
      </Link>
    </>
  );
}
