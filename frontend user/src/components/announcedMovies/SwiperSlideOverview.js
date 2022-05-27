import React from "react";
import { Link } from "react-router-dom";
import { Tab } from "react-bootstrap";
import SwiperCore, { EffectFade, Navigation, Thumbs, Pagination } from "swiper";
import "swiper/swiper-bundle.css";
SwiperCore.use([EffectFade, Navigation, Thumbs, Pagination]);

export default function SwiperSlideOverview(props) {
  return (
    <div
      className="tranding-block position-relative"
      style={{ backgroundImage: `url(${props.backgroundImage})` }}
    >
      <Tab.Container
        defaultActiveKey="trending-data1"
        className="trending-custom-tab"
      >
        {/* SwiperSlideOverview Content */}
        <Tab.Content className="trending-content">
          <Tab.Pane eventKey="trending-data1" className="overlay-tab show fade">
            <div className="trending-info align-items-center w-100 animated fadeInUp iq-ltr-direction">
              {/* SwiperSlideOverview Content - logo studio production */}
              <Link to="#" tabIndex="0">
                <div className="channel-logo">
                  <img
                    src={props.logoStudioProduction}
                    className="c-logo"
                    alt="stramit"
                  />
                </div>
              </Link>
              {/* SwiperSlideOverview Content - movie title */}
              <h1
                className="trending-text big-title text-uppercase"
                style={{ fontSize: 50 }}
              >
                {props.movieTitle}
              </h1>
              {/* SwiperSlideOverview Content - limit age, duration & date realese */}
              <div className="d-flex align-items-center text-white text-detail">
                {/* SwiperSlideOverview Content - limit age */}
                <span className="badge badge-secondary p-3">
                  {props.limitAge}
                </span>
                {/* SwiperSlideOverview Content - duration */}
                <span className="ml-3">{props.duration}</span>
                {/* SwiperSlideOverview Content - date realese */}
                <span className="trending-year">{props.realeaseDate}</span>
              </div>
              {/* SwiperSlideOverview Content - description */}
              <p className="trending-dec">{props.description}</p>
              <div className="p-btns">
                <div className="d-flex align-items-center p-0">
                  <Link
                    to="/#"
                    onClick={() => window.open(`${props.link}`, "_blank")}
                    className="btn btn-hover mr-2"
                    tabIndex="0"
                  >
                    {/* SwiperSlideOverview Content - see trailer button */}
                    <i className="fa fa-play mr-2" aria-hidden="true"></i>
                    Trailer
                  </Link>
                </div>
              </div>
              <div className="trending-list mt-4">
                <div className="text-primary title">
                  {/* SwiperSlideOverview Content - director */}
                  Director: <span className="text-body">{props.director}</span>
                </div>
                {/* SwiperSlideOverview Content - cast */}
                <div className="text-primary title">
                  Distribuție: <span className="text-body">{props.cast}</span>
                </div>
                {/* SwiperSlideOverview Content - genre */}
                <div className="text-primary title">
                  Gen: <span className="text-body">{props.genre}</span>
                </div>
                {/* SwiperSlideOverview Content - movie content also */}
                <div className="text-primary title">
                  Filmul conține:{" "}
                  <span className="text-body">{props.movieContent}</span>
                </div>
              </div>
            </div>
          </Tab.Pane>
        </Tab.Content>
      </Tab.Container>
    </div>
  );
}
