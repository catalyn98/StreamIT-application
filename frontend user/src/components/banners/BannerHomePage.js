import React, { useState, useEffect } from "react";
import axios from "axios";
import { gsap } from "gsap";
import { Container, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { EffectFade, Navigation, Thumbs, Pagination } from "swiper";
import placeholderMovie from "../../assets/images/movie-thumb/placeholderMovie.jpg";
import "swiper/swiper-bundle.css";
SwiperCore.use([EffectFade, Navigation, Thumbs, Pagination]);

const gsapAnimate = {
  getData: (elem) => {
    const option = {
      opacity: 0,
      scale: 1,
      position: {
        x: 0,
        y: 0,
      },
      ease: "",
      duration: 1,
      delay: 0.4,
      rotate: 0,
    };
    if (elem !== undefined) {
      option.position.x = gsapAnimate.validValue(elem.dataset.iqPositionX, 0);
      option.position.y = gsapAnimate.validValue(elem.dataset.iqPositionY, 0);
      option.rotate = gsapAnimate.validValue(elem.dataset.iqRotate, 0);
      option.scale = gsapAnimate.validValue(elem.dataset.iqScale, 1);
      option.opacity = gsapAnimate.validValue(elem.dataset.iqOpacity, 0);
      option.delay = gsapAnimate.validValue(elem.dataset.iqDelay, 0.4);
      option.duration = gsapAnimate.validValue(elem.dataset.iqDuration, 1.5);
      option.ease = gsapAnimate.validValue(elem.dataset.iqEase, "");
      const setOption = {
        opacity: option.opacity,
        scale: option.scale,
        x: option.position.x,
        y: option.position.y,
        ease: option.ease,
        rotate: option.rotate,
        duration: option.duration,
        delay: option.delay,
      };
      return setOption;
    } else {
      return { opacity: 0 };
    }
  },
  onStart: (elem) => {
    const setOption = gsapAnimate.getData(elem);
    gsap.from(elem, setOption);
  },
  onEnd: (elem) => {
    const setOption = gsapAnimate.getData(elem);
    gsap.to(elem, setOption);
  },
  onStartEnd: (elem) => {
    const setOption = gsapAnimate.getData(elem);
    const setEndOption = gsapAnimate.getData(elem);
    setEndOption.opacity = 1;
    setEndOption.x = 0;
    setEndOption.y = 0;
    setEndOption.rotate = 0;
    setEndOption.scale = 1;
    gsap.fromTo(elem, setOption, setEndOption);
  },
  validValue: (attr, defaultVal) => {
    if (attr !== undefined && attr !== null) {
      return Number(attr);
    }
    return Number(defaultVal);
  },
};

export default function Banner() {
  const [content, setConetent] = useState({});

  useEffect(() => {
    const getSliderMovie = async () => {
      try {
        const res = await axios.get("/movie/randomMovie/", {
          headers: {
            Authorization:
              "Bearer " + JSON.parse(localStorage.getItem("user")).token,
          },
        });
        setConetent(res.data[0]);
      } catch (error) {
        console.log(error);
      }
    };
    getSliderMovie();
  }, []);

  const animationInit = () => {
    if (
      document.querySelector(".swiper-container .swiper-slide-active") !== null
    ) {
      const gsapElem = document
        .querySelector(".swiper-container .swiper-slide-active")
        .querySelectorAll('[data-iq-gsap="onStart"]');
      Array.from(gsapElem, (elem) => {
        return gsapAnimate.onStartEnd(elem);
      });
    }
  };

  const imageSlider = content.image;

  return (
    <>
      <section id="home" className="iq-main-slider p-0 iq-rtl-direction">
        <Swiper
          onInit={() => {
            animationInit();
          }}
          id="home-slider"
          className="slider m-0 p-0"
        >
          <SwiperSlide
            className="slide slick-bg s-bg-1"
            // Image slider
            style={{
              backgroundImage: "url(" + imageSlider || placeholderMovie + ")",
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
            <Container fluid className="position-relative h-100">
              <div className="slider-inner h-100">
                <Row className="align-items-center  iq-ltr-direction h-100 ">
                  {/* Left Side */}
                  <Col xl="7" lg="12" md="12">
                    {/* Movie title */}
                    <h1
                      className="slider-text big-title title text-uppercase"
                      data-iq-gsap="onStart"
                      data-iq-position-x="-200"
                      style={{ fontSize: 50 }}
                    >
                      {content.title}
                    </h1>
                    <div className="d-flex flex-wrap align-items-center">
                      {/* Rating star */}
                      <div
                        className="slider-ratting d-flex align-items-center mr-4 mt-2 mt-md-3"
                        data-iq-gsap="onStart"
                        data-iq-position-x="-200"
                        data-iq-delay="-0.5"
                      >
                        <ul className="ratting-start p-0 m-0 list-inline text-primary d-flex align-items-center justify-content-left">
                          <li>
                            <i className="fa fa-star" aria-hidden="true"></i>
                          </li>
                          <li>
                            <i className="fa fa-star" aria-hidden="true"></i>
                          </li>
                          <li>
                            <i className="fa fa-star" aria-hidden="true"></i>
                          </li>
                          <li>
                            <i className="fa fa-star" aria-hidden="true"></i>
                          </li>
                          <li>
                            <i
                              className="fa fa-star-half"
                              aria-hidden="true"
                            ></i>
                          </li>
                        </ul>
                      </div>
                      {/* Limit age & duration */}
                      <div
                        className="d-flex align-items-center mt-2 mt-md-3"
                        data-iq-gsap="onStart"
                        data-iq-position-x="-200"
                        data-iq-delay="-0.5"
                      >
                        {/* Limit age */}
                        <span className="badge badge-secondary p-2">
                          {content.limitAge}
                        </span>
                        {/* Duration */}
                        <span className="ml-3">{content.duration}</span>
                      </div>
                      {/* Movie description */}
                      <div>
                        <p
                          data-iq-gsap="onStart"
                          data-iq-position-y="80"
                          data-iq-delay="0.8"
                        >
                          {content.description}
                        </p>
                      </div>
                    </div>
                    {/* Director, cast & genre */}
                    <div
                      className="trending-list"
                      data-iq-gsap="onStart"
                      data-iq-position-y="80"
                      data-iq-delay="0.8"
                    >
                      {/* Director */}
                      <div className="text-primary title starring">
                        Director:{" "}
                        <span className="text-body">{content.director}</span>
                      </div>
                      {/* Cast */}
                      <div className="text-primary title genres">
                        Distribuție:{" "}
                        <span className="text-body">{content.cast}</span>
                      </div>
                      {/* Genre */}
                      <div className="text-primary title tag">
                        Gen: <span className="text-body">{content.genre}</span>
                      </div>
                    </div>
                  </Col>
                  {/* Right Side */}
                  <Col
                    xl="5"
                    lg="12"
                    md="12"
                    className="trailor-video text-center"
                  >
                    <Link
                      to={{
                        pathname: "/movie-details/" + content.title,
                        movie: content,
                      }}
                      className="video-open playbtn"
                    >
                      {/* Play button svg */}
                      <svg
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        x="0px"
                        y="0px"
                        width="80px"
                        height="80px"
                        viewBox="0 0 213.7 213.7"
                        enableBackground="new 0 0 213.7 213.7"
                        xmlSpace="preserve"
                      >
                        <polygon
                          className="triangle"
                          fill="none"
                          strokeWidth="7"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeMiterlimit="10"
                          points="73.5,62.5 148.5,105.8 73.5,149.1 "
                        />
                        <circle
                          className="circle"
                          fill="none"
                          strokeWidth="7"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeMiterlimit="10"
                          cx="106.8"
                          cy="106.8"
                          r="103.3"
                        />
                      </svg>
                      <span className="w-trailor">Vizionează</span>
                    </Link>
                  </Col>
                </Row>
              </div>
            </Container>
          </SwiperSlide>
        </Swiper>
      </section>
    </>
  );
}
