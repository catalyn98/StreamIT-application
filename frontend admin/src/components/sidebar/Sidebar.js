import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Accordion } from "react-bootstrap";
import Scrollbar from "smooth-scrollbar";
import logo from "../../../src/assets/images/logo.png";

export default function Sidebar() {
  const [setActiveMenu] = useState(false);

  let location = useLocation();

  useEffect(() => {
    Scrollbar.init(document.querySelector("#sidebar-scrollbar"));
  });

  const minisidbar = () => {
    document.body.classList.toggle("sidebar-main");
  };

  return (
    <div className="iq-sidebar">
      {/* Sidebar logo */}
      <div className="iq-sidebar-logo d-flex justify-content-between">
        <Link to="/" className="header-logo">
          <img src={logo} className="img-fluid rounded-normal" alt="" />
          {/* Logo title */}
          <div className="logo-title">
            <span className="text-primary text-uppercase">StreamIT</span>
          </div>
        </Link>
        {/* Menu hamburger */}
        <div className="iq-menu-bt-sidebar">
          <div className="iq-menu-bt align-self-center">
            <div className="wrapper-menu" onClick={minisidbar}>
              <div className="main-circle">
                <i className="las la-bars"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Sidebar options */}
      <div className="data-scrollbar" data-scroll="1" id="sidebar-scrollbar">
        <nav className="iq-sidebar-menu">
          <Accordion
            as="ul"
            id="iq-sidebar-toggle"
            className="iq-menu"
            onSelect={(e) => setActiveMenu(e)}
          >
            {/* Dashboard */}
            <li className={`${location.pathname === "/" ? "active" : ""} `}>
              <Link to="/" className="iq-waves-effect">
                <i className="las la-home iq-arrow-left"></i>
                <span>Dashboard</span>
              </Link>
            </li>
            {/* Users list */}
            <li
              className={`${
                location.pathname === "/users-list" ? "active" : ""
              } `}
            >
              <Link to="/users-list" className="iq-waves-effect">
                <i className="las la-user-friends"></i>
                <span>Utilizatori</span>
              </Link>
            </li>
            {/* Movies list */}
            <li
              className={`${
                location.pathname === "/movies-list" ? "active" : ""
              } `}
            >
              <Link to="/movies-list" className="iq-waves-effect">
                <i className="las la-film"></i>
                <span>Filme</span>
              </Link>
            </li>
            {/* Movies categories list */}
            <li
              className={`${
                location.pathname === "/categories-movies-list" ? "active" : ""
              } `}
            >
              <Link to="/categories-movies-list" className="iq-waves-effect">
                <i className="las la-list-ul"></i>
                <span>Categorii</span>
              </Link>
            </li>
            {/* News */}
            <li
              className={`${
                location.pathname === "/blog-posts" ? "active" : ""
              } `}
            >
              <Link to="/blog-posts" className="iq-waves-effect">
                <i className="las la-newspaper"></i>
                <span>Blog</span>
              </Link>
            </li>
          </Accordion>
        </nav>
      </div>
    </div>
  );
}
