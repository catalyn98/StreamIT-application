import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import BannerPages from "../../components/banners/BannerPages";
import Card from "../../components/card/Card";
import multipleDevices from "../../assets/images/multipleDevices.png";

export default function FAQ() {
  const [faq, setfaq] = useState("1");

  return (
    <>
      <BannerPages pageName="Întrebări frecvente" />
      <main id="main" className="site-main">
        <Container>
          <Row>
            <Col lg="12" sm="12">
              <div className="iq-accordion iq-accordion-square">
                <div
                  className={`iq-accordion-block  1 ${
                    faq === "1" ? "iq-active" : ""
                  }`}
                  onClick={() => {
                    setfaq("1");
                  }}
                >
                  <div className="iq-accordion-title">
                    <div className="iq-icon-right">
                      <i aria-hidden="true" className="fa fa-minus active"></i>
                      <i aria-hidden="true" className="fa fa-plus inactive"></i>
                    </div>
                    <h4 className="mb-0 accordion-title iq-heading-title">
                      Ce este StreamIT?
                    </h4>
                  </div>
                  <div
                    className={`iq-accordion-details ${
                      faq === "1" ? "d-block" : "d-none"
                    }`}
                  >
                    <p className="iq-content-text">
                      {" "}
                      StreamIT este un serviciu gratuit de streaming, care
                      permite utilizatorilor săi să vizioneze filme pe un
                      dispozitiv conectat la internet. Serviciul este 100%
                      gratuit și nu generează nici un fel de costuri. Vizionează
                      oricât, oricând și fără nicio reclamă, totul gratuit.
                      Întotdeauna descoperi ceva nou, deoarece adăugăm filme noi
                      în fiecare săptămână.
                    </p>
                  </div>
                </div>
                <div
                  className={`iq-accordion-block 2  ${
                    faq === "2" ? "iq-active" : ""
                  }`}
                  onClick={() => {
                    setfaq("2");
                  }}
                >
                  <div className="iq-accordion-title">
                    <div className="iq-icon-right">
                      <i aria-hidden="true" className="fa fa-minus active"></i>
                      <i aria-hidden="true" className="fa fa-plus inactive"></i>
                    </div>
                    <h4 className="mb-0 accordion-title iq-heading-title">
                      Ce dispozitive pot folosi pentru vizionarea filmelor?
                    </h4>
                  </div>
                  <div
                    className={`iq-accordion-details ${
                      faq === "2" ? "d-block" : "d-none"
                    }`}
                  >
                    <p className="iq-content-text">
                      {" "}
                      Vizionează oriunde și oricând pe orice dispozitiv cu
                      conexiune la internet.{" "}
                    </p>
                    <p className="iq-content-text">
                      {" "}
                      Poți viziona filmele pe iPhone, iPad, telefon mobil,
                      tabletă Android, Apple TV, Android TV, Chromecast, Samsung
                      TV, LG, Chrome OS, MacOS, Windows PC, PS4 și PS5, iar în
                      viitor aplicația va fi disponibilă și pe alte dispozitive.{" "}
                    </p>
                    <p className="iq-content-text">
                      {" "}
                      Datorită design-ului responsive serviciul poate fi redat
                      pe orice ecran!{" "}
                    </p>
                    <div className=" text-center" style={{ paddingTop: 5 }}>
                      <img
                        src={multipleDevices}
                        width="500"
                        className="img-fluid d-block mx-auto mb-3"
                        alt="multipleDevices"
                      />
                    </div>
                  </div>
                </div>
                <div
                  className={`iq-accordion-block 3 ${
                    faq === "3" ? "iq-active" : ""
                  }`}
                  onClick={() => {
                    setfaq("3");
                  }}
                >
                  <div className="iq-accordion-title">
                    <div className="iq-icon-right">
                      <i aria-hidden="true" className="fa fa-minus active"></i>
                      <i aria-hidden="true" className="fa fa-plus inactive"></i>
                    </div>
                    <h4 className="mb-0 accordion-title iq-heading-title">
                      Ce pot viziona pe StreamIT?
                    </h4>
                  </div>
                  <div
                    className={`iq-accordion-details ${
                      faq === "3" ? "d-block" : "d-none"
                    }`}
                  >
                    <p className="iq-content-text">
                      {" "}
                      StreamIT oferă o nouă experiență de vizionare și îți
                      aduce, pentru prima dată într-un singur loc, cele mai
                      fascinante povești de la Warner Bros., HBO, DC, Cartoon
                      Network și multe altele. Serviciul nostru are o bibliotecă
                      extraordinar de bogată, cu filme premiate, lungmetraje,
                      documentare, animeuri și multe altele.{" "}
                    </p>
                  </div>
                </div>
                <div
                  className={`iq-accordion-block 4  ${
                    faq === "4" ? "iq-active" : ""
                  }`}
                  onClick={() => {
                    setfaq("4");
                  }}
                >
                  <div className="iq-accordion-title">
                    <div className="iq-icon-right">
                      <i aria-hidden="true" className="fa fa-minus active"></i>
                      <i aria-hidden="true" className="fa fa-plus inactive"></i>
                    </div>
                    <h4 className="mb-0 accordion-title iq-heading-title">
                      Cum îmi pot șterge contul?
                    </h4>
                  </div>
                  <div
                    className={`iq-accordion-details ${
                      faq === "4" ? "d-block" : "d-none"
                    }`}
                  >
                    <p className="iq-content-text">
                      {" "}
                      StreamIT este un serviciu flexibil, de aceea nu există
                      clauze ascunse sau obligații. Poți anula cu ușurință
                      contul luând legătura cu administratorul serviciului,
                      neexistând taxe de anulare.{" "}
                    </p>
                    <p className="iq-content-text">
                      {" "}
                      Pentru a lua legătura cu acesta este necesar să completezi
                      formularul din pagina{" "}
                      <Link to="/contact-us" style={{ fontWeight: "bold" }}>
                        Contact
                      </Link>{" "}
                      precizând numele, prenumele, numărul de telefon, adresa de
                      email și în mesaj motivul anulării contului de utilizator.
                      Acest lucru ne ajută să ne îmbunătățim serviciul pe
                      viitor.{" "}
                    </p>
                  </div>
                </div>
                <div
                  className={`iq-accordion-block 5  ${
                    faq === "5" ? "iq-active" : ""
                  }`}
                  onClick={() => {
                    setfaq("5");
                  }}
                >
                  <div className="iq-accordion-title">
                    <div className="iq-icon-right">
                      <i aria-hidden="true" className="fa fa-minus active"></i>
                      <i aria-hidden="true" className="fa fa-plus inactive"></i>
                    </div>
                    <h4 className="mb-0 accordion-title iq-heading-title">
                      Ce este sistemul de evaluare al conținutului?
                    </h4>
                  </div>
                  <div
                    className={`iq-accordion-details ${
                      faq === "5" ? "d-block" : "d-none"
                    }`}
                  >
                    <p className="iq-content-text">
                      {" "}
                      Sistemul de evaluare al conținutului reprezintă un sistem
                      de rating pentru filme și seriale cu scopul de a estima
                      adecvarea acestora pentru anumite audiențe pe baza
                      conținutului lor{" "}
                    </p>
                    <p className="iq-content-text">
                      {" "}
                      Sistemul de rating MPA (Motion Picture Association) este
                      un exemplu de sistem de evaluare al conținutului care este
                      folosit cu scopul de a ajuta părinții să decidă ce
                      conținut media este adecvat pentru copiii lor.{" "}
                    </p>
                    <div>
                      <Card.Body>
                        <div
                          className="table-responsive"
                          style={{ paddingTop: 20 }}
                        >
                          <table
                            id="datatable"
                            className="table table-striped table-bordered"
                          >
                            <thead>
                              <tr>
                                <th style={{ textAlign: "center" }}>
                                  Simbol de evaluare
                                </th>
                                <th style={{ textAlign: "center" }}>
                                  Descriere
                                </th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>G</td>
                                <td>
                                  Public general - sunt admise toate vârstele.
                                </td>
                              </tr>
                              <tr>
                                <td>R</td>
                                <td>
                                  Restricționat - conține materiale pentru
                                  adulți, iar pentru copii cu vârsta sub 17 ani
                                  este necesară aprobarea din partea unui
                                  părinte.
                                </td>
                              </tr>
                              <tr>
                                <td>PG</td>
                                <td>
                                  <p>
                                    Îndrumare părintească sugerată - este
                                    posibil ca unele materiale să nu fie
                                    potrivite pentru copii.
                                  </p>
                                </td>
                              </tr>
                              <tr>
                                <td>PG-13</td>
                                <td>
                                  <p>
                                    Părinții puternic avertizați - unele
                                    materiale pot fi inadecvate copiilor sub 13
                                    ani, de aceea părinții sunt îndemnați să fie
                                    prudenți.
                                  </p>
                                </td>
                              </tr>
                              <tr>
                                <td>NC-13</td>
                                <td>
                                  <p>
                                    Numai pentru adulți - persoanele sub 17 ani
                                    nu au voie să vizioneze acest tip de
                                    conținut.
                                  </p>
                                </td>
                              </tr>
                              <tr>
                                <td>TV-MA</td>
                                <td>
                                  <p>
                                    Numai pentru publicul matur - acest program
                                    este conceput special pentru a fi vizionat
                                    de adulți și, prin urmare, poate fi
                                    nepotrivit copiilor sub 17 ani.
                                  </p>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </Card.Body>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </main>
    </>
  );
}
