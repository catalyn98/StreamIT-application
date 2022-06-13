import React from "react";
import Header from "../components/header/Header";
import MainPages from "../router/MainPages";
import Footer from "../components/footer/Footer";
import Sidebar from "../components/sidebar/Sidebar";

export default function MainPagesApp() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content-page" id="content-page">
        <MainPages />
      </div>
      <Footer />
      <Sidebar />
    </div>
  );
}
