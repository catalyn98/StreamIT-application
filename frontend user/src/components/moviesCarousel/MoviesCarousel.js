import React from "react";
import { gsap } from "gsap";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { EffectFade, Navigation, Thumbs, Pagination } from "swiper";
import ContentMovieSlider from "./ContentMoviesCarousel";
import MovieBanner1 from "../../assets/images/movie-banner/01.jpg";
import MovieBanner2 from "../../assets/images/movie-banner/02.jpg";
import MovieBanner3 from "../../assets/images/movie-banner/03.jpg";
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

export default function MoviesCarousel() {
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

  return (
    <div>
      <section id="home" className="iq-main-slider p-0 iq-rtl-direction">
        <div id="prev5" className="swiper-button swiper-button-prev">
          <i className="fa fa-chevron-left"></i>
        </div>
        <div id="next5" className="swiper-button swiper-button-next">
          <i className="fa fa-chevron-right"></i>
        </div>
        <Swiper
          navigation={{
            prevEl: "#prev5",
            nextEl: "#next5",
          }}
          pagination={{
            clickable: true,
          }}
          onInit={() => {
            animationInit();
          }}
          onSlideChangeTransitionStart={() => animationInit()}
          loop={true}
          id="home-slider"
          className="slider m-0 p-0"
        >
          {/* SwiperSlide #1 */}
          <SwiperSlide
            className="slide slick-bg s-bg-1"
            style={{ backgroundImage: `url(${MovieBanner1})` }}
          >
            <ContentMovieSlider
              movieTitle="Mortal Kombat"
              imbd="4.7(lmdb)"
              limitAge="R"
              duration="1h 50m"
              movieDescription="Luptătorul de MMA Cole Young îi caută pe cei mai mari campioni ai Pământului pentru a lupta împotriva dușmanilor din Outworld într-o luptă cu mize mari pentru univers."
              director="Simon McQuoid"
              cast="Lewis Tan, Jessica McNamee, Josh Lawson"
              genre="Acțiune"
              tag="Aventură, Fantezie"
              link="https://www.youtube.com/watch?v=NYH2sLid0Zc"
              moreDetails="https://www.imdb.com/title/tt0293429/"
            />
          </SwiperSlide>
          {/* SwiperSlide #2 */}
          <SwiperSlide
            className="slide slick-bg s-bg-2"
            style={{ backgroundImage: `url(${MovieBanner2})` }}
          >
            <ContentMovieSlider
              movieTitle="Dune"
              imbd="4.7(lmdb)"
              limitAge="PG-13"
              duration="2h 35m"
              movieDescription="O familie nobilă este implicată într-un război pentru controlul asupra celui mai valoros bun al galaxiei, în timp ce moștenitorul ei este tulburat de viziunile unui viitor întunecat."
              director="Denis Villeneuve"
              cast="Timothée Chalamet, Rebecca Ferguson, Zendaya"
              genre="Acțiune"
              tag="Dramă, Aventură"
              link="https://www.youtube.com/watch?v=n9xhJrPXop4"
              moreDetails="https://www.imdb.com/title/tt1160419/?ref_=fn_al_tt_1"
            />
          </SwiperSlide>
          {/* SwiperSlide #3 */}
          <SwiperSlide
            className="slide slick-bg s-bg-3"
            style={{ backgroundImage: `url(${MovieBanner3})` }}
          >
            <ContentMovieSlider
              movieTitle="Liga dreptatii"
              imbd="4.7(lmdb)"
              limitAge="R"
              duration="4h 2m"
              movieDescription="Hotărât să se asigure că sacrificiul suprem al lui Superman nu a fost în zadar, Bruce Wayne își aliniază forțele cu Diana Prince cu planuri de a recruta o echipă de metaoameni pentru a proteja lumea de o amenințare de proporții catastrofale care se apropie."
              director="Zack Snyder"
              cast="Henry Cavill, Ben Affleck, Gal Gadot"
              genre="Acțiune"
              tag="Aventură, Fantezie"
              link="https://www.youtube.com/watch?v=3cxixDgHUYw"
              moreDetails="https://www.imdb.com/title/tt0974015/?ref_=nv_sr_srsg_6"
            />
          </SwiperSlide>
        </Swiper>
      </section>
    </div>
  );
}
