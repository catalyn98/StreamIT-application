import React, { useState } from "react";
import { Container, Col, Row } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { EffectFade, Navigation, Thumbs, Pagination } from "swiper";
import SwiperSlideImage from "./SwiperSlideImage";
import SwiperSlideOverview from "./SwiperSlideOverview";
import movieThumbnail1 from "../../assets/images/trending/05.jpg";
import movieThumbnail2 from "../../assets/images/trending/02.jpg";
import movieThumbnail3 from "../../assets/images/trending/03.jpg";
import movieThumbnail4 from "../../assets/images/trending/04.jpg";
import movieThumbnail5 from "../../assets/images/trending/01.jpg";
import movieThumbnail6 from "../../assets/images/trending/06.jpg";
import logo from "../../assets/images/logo.png";
SwiperCore.use([EffectFade, Navigation, Thumbs, Pagination]);

export default function AnnouncedMovies() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div className="main-content">
      <section id="iq-trending" className="s-margin">
        <Container fluid>
          <Row>
            <Col sm="12" className="overflow-hidden">
              {/* List title */}
              <div className="d-flex align-items-center justify-content-between">
                <h4 className="main-title">Filme anunțate pentru anul 2023</h4>
              </div>
              {/* Movie slider */}
              <div id="trending-contens">
                {/* Previous button */}
                <div id="prev4" className="swiper-button swiper-button-prev">
                  <i className="fa fa-chevron-left"></i>
                </div>
                {/* Next button */}
                <div id="next4" className="swiper-button swiper-button-next">
                  <i className="fa fa-chevron-right"></i>
                </div>
                <Swiper
                  as="ul"
                  thumbs={{ swiper: thumbsSwiper }}
                  centeredSlides={true}
                  centeredSlidesBounds={true}
                  navigation={{
                    prevEl: "#prev4",
                    nextEl: "#next4",
                  }}
                  slidesPerView={5}
                  spaceBetween={20}
                  breakpoints={{
                    320: { slidesPerView: 1 },
                    550: { slidesPerView: 2 },
                    991: { slidesPerView: 3 },
                    1400: { slidesPerView: 4 },
                    1500: { slidesPerView: 5 },
                  }}
                  loop={true}
                  className="list-inline p-0 m-0 row align-items-center iq-rtl-direction"
                >
                  {/* SwiperSlide #1 */}
                  <SwiperSlide as="li">
                    <SwiperSlideImage image={movieThumbnail1} />
                  </SwiperSlide>
                  {/* SwiperSlide #2 */}
                  <SwiperSlide as="li">
                    <SwiperSlideImage image={movieThumbnail2} />
                  </SwiperSlide>
                  {/* SwiperSlide #3 */}
                  <SwiperSlide as="li">
                    <SwiperSlideImage image={movieThumbnail3} />
                  </SwiperSlide>
                  {/* SwiperSlide #4 */}
                  <SwiperSlide as="li">
                    <SwiperSlideImage image={movieThumbnail4} />
                  </SwiperSlide>
                  {/* SwiperSlide #5 */}
                  <SwiperSlide as="li">
                    <SwiperSlideImage image={movieThumbnail5} />
                  </SwiperSlide>
                  {/* SwiperSlide #6 */}
                  <SwiperSlide as="li">
                    <SwiperSlideImage image={movieThumbnail6} />
                  </SwiperSlide>
                </Swiper>
              </div>
              {/* Overview movie */}
              <div>
                <Swiper
                  onSwiper={setThumbsSwiper}
                  slidesPerView={1}
                  freeMode={true}
                  watchSlidesProgress={true}
                  id="trending-slider"
                  className="mt-3  list-inline p-0 m-0  d-flex align-items-center iq-rtl-direction"
                >
                  {/* SwiperSlideOverview #1 */}
                  <SwiperSlide as="li">
                    <SwiperSlideOverview
                      backgroundImage={movieThumbnail1}
                      logoStudioProduction={logo}
                      movieTitle="Transformers: Ultimul cavaler"
                      limitAge="PG-13"
                      duration="2h 34m"
                      realeaseDate="20 Februrarie 2023"
                      description="O amenințare mortală din istoria Pământului reapare și o vânătoare a unui artefact pierdut are loc între Autoboți și Decepticons, în timp ce Optimus Prime îl întâlnește pe creatorul său în spațiu."
                      link="https://www.youtube.com/watch?v=GVPEtX3ExCA"
                      director="Michael Bay"
                      cast="Mark Wahlberg, Anthony Hopkins, Josh Duhamel"
                      genre="Acțiune"
                      movieContent="Aventură, Sci-Fi"
                    />
                  </SwiperSlide>
                  {/* SwiperSlideOverview #2 */}
                  <SwiperSlide as="li">
                    <SwiperSlideOverview
                      backgroundImage={movieThumbnail2}
                      logoStudioProduction={logo}
                      movieTitle="Primul razbunator: Razboiul eroilor"
                      limitAge="PG-13"
                      duration="2h 27m"
                      realeaseDate="21 Noiembrie 2023"
                      description="Implicarea politică în afacerile Răzbunătorilor provoacă o ruptură între Căpitanul America și Iron Man."
                      link="https://www.youtube.com/watch?v=dSTNHpcxdFQ"
                      director="Anthony Russo, Joe Russo"
                      cast="Chris Evans, Robert Downey Jr., Scarlett Johansson"
                      genre="Acțiune"
                      movieContent="Aventură, Sci-Fi"
                    />
                  </SwiperSlide>
                  {/* SwiperSlideOverview #3 */}
                  <SwiperSlide as="li">
                    <SwiperSlideOverview
                      backgroundImage={movieThumbnail3}
                      logoStudioProduction={logo}
                      movieTitle="Sonic ariciul 3"
                      limitAge="PG"
                      duration="2h 2m"
                      realeaseDate="20 August 2023"
                      description="Când maniacul Dr Robotnik se întoarce pe Pământ cu un nou aliat, Knuckles Echidna, Sonic și noul său prieten Tails sunt tot ce le stă în cale."
                      link="https://www.youtube.com/watch?v=7j-ai3it1Ao"
                      director="Jeff Fowler"
                      cast="James Marsden, Jim Carrey, Ben Schwartz"
                      genre="Acțiune"
                      movieContent="Comedie, Animație"
                    />
                  </SwiperSlide>
                  {/* SwiperSlideOverview #4 */}
                  <SwiperSlide as="li">
                    <SwiperSlideOverview
                      backgroundImage={movieThumbnail4}
                      logoStudioProduction={logo}
                      movieTitle="Moarte pe Nill"
                      limitAge="PG-13"
                      duration="2h 7m"
                      realeaseDate="25 Aprilie 2023"
                      description="În timpul vacanței pe Nil, Hercule Poirot trebuie să investigheze uciderea unei tinere moștenitoare."
                      link="https://www.youtube.com/watch?v=JB6n2hRowrY"
                      director="Kenneth Branagh"
                      cast="Tom Bateman, Annette Bening, Kenneth Branagh"
                      genre="Crimă"
                      movieContent="Mister, Dramă"
                    />
                  </SwiperSlide>
                  {/* SwiperSlideOverview #5 */}
                  <SwiperSlide as="li">
                    <SwiperSlideOverview
                      backgroundImage={movieThumbnail5}
                      logoStudioProduction={logo}
                      movieTitle="Dune"
                      limitAge="PG-13"
                      duration="2h 35m"
                      realeaseDate="12 Ianuarie 2023"
                      description="O familie nobilă este implicată într-un război pentru controlul asupra celui mai valoros bun al galaxiei, în timp ce moștenitorul ei este tulburat de viziunile unui viitor întunecat."
                      link="https://www.youtube.com/watch?v=n9xhJrPXop4"
                      director="Denis Villeneuve"
                      cast="Timothée Chalamet, Rebecca Ferguson, Zendaya"
                      genre="Acțiune"
                      movieContent="Dramă, Aventură"
                    />
                  </SwiperSlide>
                  {/* SwiperSlideOverview #6 */}
                  <SwiperSlide as="li">
                    <SwiperSlideOverview
                      backgroundImage={movieThumbnail6}
                      logoStudioProduction={logo}
                      movieTitle="Predatorul"
                      limitAge="R"
                      duration="1h 47m"
                      realeaseDate="25 Martie 2023"
                      description="Când un băiat declanșează din greșeală întoarcerea pe Pământ a celor mai letali vânători ai universului, doar o echipă de foști soldați și un om de știință nemulțumit pot împiedica sfârșitul rasei umane."
                      link="https://www.youtube.com/watch?v=WaG1KZqrLvM"
                      director="Shane Black"
                      cast="Boyd Holbrook, Trevante Rhodes, Jacob Tremblay"
                      genre="Acțiune"
                      movieContent="Violență, Aventură, Sci-Fi"
                    />
                  </SwiperSlide>
                </Swiper>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}
