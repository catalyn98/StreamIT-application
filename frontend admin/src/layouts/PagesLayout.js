import React from "react";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import Sidebar from "../components/sidebar/Sidebar";
import MainPages from "../router/MainPages";

export default function PagesLayout() {
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
