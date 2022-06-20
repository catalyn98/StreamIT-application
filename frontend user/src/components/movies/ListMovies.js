import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { EffectFade, Navigation, Thumbs, Pagination } from "swiper";
import "swiper/swiper-bundle.css";
import MovieCard from "./MovieCard";
SwiperCore.use([EffectFade, Navigation, Thumbs, Pagination]);

export default function ListMovies({ list }) {
  return (
    <div className="main-content">
      <section id="iq-favorites">
        <Container fluid>
          <Row>
            <Col sm="12" className="overflow-hidden">
              {/* Title list */}
              <div className="d-flex align-items-center justify-content-between">
                <h4 className="main-title">{list.title}</h4>
              </div>
              {/* Movies Slider */}
              <div id="favorites-contens">
                {/* Previous button */}
                <div id="prev" className="swiper-button swiper-button-prev">
                  <i className="fa fa-chevron-left"></i>
                </div>
                {/* Next button */}
                <div id="next" className="swiper-button swiper-button-next">
                  <i className="fa fa-chevron-right"></i>
                </div>
                <Swiper
                  navigation={{
                    prevEl: "#prev",
                    nextEl: "#next",
                  }}
                  /* Responsive movie slider */
                  breakpoints={{
                    320: { slidesPerView: 1 },
                    550: { slidesPerView: 2 },
                    991: { slidesPerView: 3 },
                    1400: { slidesPerView: 4 },
                  }}
                  slidesPerView={4}
                  spaceBetween={20}
                  as="ul"
                  className="favorites-slider list-inline  row p-0 m-0 iq-rtl-direction"
                >
                  {list.content?.map((item, index) => (
                    <SwiperSlide key={index} as="li">
                      <MovieCard item={item} />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}
