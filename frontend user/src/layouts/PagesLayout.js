import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/header/Header";
import MainPages from "../router/MainPages";
import Footer from "../components/footer/Footer";

const PagesLayout = () => {
  const backToTop = document.getElementById("back-to-top");

  if (backToTop !== null && backToTop !== undefined) {
    document.getElementById("back-to-top").classList.add("animated", "fadeOut");
    window.addEventListener("scroll", (e) => {
      if (document.documentElement.scrollTop > 50) {
        document.getElementById("back-to-top").classList.remove("fadeOut");
        document.getElementById("back-to-top").classList.add("fadeIn");
      } else {
        document.getElementById("back-to-top").classList.remove("fadeIn");
        document.getElementById("back-to-top").classList.add("fadeOut");
      }
    });
    document.querySelector("#top").addEventListener("click", (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  return (
    <>
      <div id="back-to-top">
        <Link className="top" to="#" id="top">
          {" "}
          <i className="fa fa-angle-up"></i>{" "}
        </Link>
      </div>
      <div className="wraper">
        <Header />
        <div className="content-page" id="content-page">
          <MainPages />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PagesLayout;
