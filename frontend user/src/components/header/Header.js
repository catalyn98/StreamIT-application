import React from "react";
import { Container, Row, Col, Navbar, Dropdown, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import Card from "../card/Card";
import CustomToggle from "../customToggle/CustomToggle";
import TheMostRecentMovies from "./TheMostRecentMovies";
import logo from "../../assets/images/logo.png";
import user from "../../assets/images/user/user.png";

export default function Header() {
  return (
    <>
      <header id="main-header">
        <div className="main-header">
          <Container fluid>
            <Row>
              <Col sm="12">
                <Navbar expand="lg" className="p-0">
                  {/* Hamburger menu */}
                  <Navbar.Toggle className="c-toggler">
                    <div className="navbar-toggler-icon">
                      <span className="navbar-menu-icon navbar-menu-icon--top"></span>
                      <span className="navbar-menu-icon navbar-menu-icon--middle"></span>
                      <span className="navbar-menu-icon navbar-menu-icon--bottom"></span>
                    </div>
                  </Navbar.Toggle>
                  {/* Logo website*/}
                  <Navbar.Brand className="navbar-brand" href="/">
                    <img className="img-fluid logo" src={logo} alt="streamit" />
                  </Navbar.Brand>
                  {/* Mobile responsive */}
                  <Dropdown className="mobile-more-menu">
                    {/* Icon toggle */}
                    <Dropdown.Toggle
                      to="#"
                      as={CustomToggle}
                      variant="more-toggle"
                    >
                      <i className="ri-more-line"></i>
                    </Dropdown.Toggle>
                    {/* User management */}
                    <Dropdown.Menu className="more-menu iq-sub-dropdown iq-user-dropdown">
                      <div className="navbar-right position-relative">
                        <Dropdown as="li" className="nav-item m-0">
                          <Card className="shadow-none m-0">
                            {/* Menu options user management */}
                            <Card.Body className="p-0 pl-3 pr-3">
                              {/* User profile */}
                              <Link
                                to="/user-profile"
                                className="iq-sub-card setting-dropdown"
                              >
                                <div className="media align-items-center">
                                  <div className="right-icon">
                                    <i className="ri-file-user-line text-primary"></i>
                                  </div>
                                  <div className="media-body ml-3 sub-menu">
                                    <h6 className="my-0 ">
                                      Vizualizare profil
                                    </h6>
                                  </div>
                                </div>
                              </Link>
                              {/* User account settings */}
                              <Link
                                to="/user-account-settings"
                                className="iq-sub-card setting-dropdown"
                              >
                                <div className="media align-items-center">
                                  <div className="right-icon">
                                    <i className="ri-settings-4-line text-primary"></i>
                                  </div>
                                  <div className="media-body ml-3">
                                    <h6 className="my-0 ">Setări profil</h6>
                                  </div>
                                </div>
                              </Link>
                              {/* My seen movies */}
                              <Link
                                to="/my-seen-movies"
                                className="iq-sub-card setting-dropdown"
                              >
                                <div className="media align-items-center">
                                  <div className="right-icon">
                                    <i className="ri-movie-line text-primary"></i>
                                  </div>
                                  <div className="media-body ml-3">
                                    <h6 className="my-0 ">Filme vizualizate</h6>
                                  </div>
                                </div>
                              </Link>
                              {/* Logout */}
                              <Link
                                to="/welcome/login"
                                className="iq-sub-card setting-dropdown"
                              >
                                <div className="media align-items-center">
                                  <div className="right-icon">
                                    <i className="ri-logout-circle-line text-primary"></i>
                                  </div>
                                  <div className="media-body ml-3">
                                    <h6 className="my-0 ">Deconectare</h6>
                                  </div>
                                </div>
                              </Link>
                            </Card.Body>
                          </Card>
                        </Dropdown>
                      </div>
                    </Dropdown.Menu>
                  </Dropdown>
                  {/* Menu option */}
                  <Navbar.Collapse className="">
                    <div className="menu-main-menu-container">
                      <Nav as="ul" id="top-menu" className="ml-auto">
                        <li className="menu-item">
                          <Link to="/">Home Cinema</Link>
                        </li>
                        <li className="menu-item">
                          <Link to="/movies">Filme</Link>
                        </li>
                        <li className="menu-item">
                          <Link to="/blog">Blog</Link>
                        </li>
                        <li className="menu-item">
                          <Link to="/team">Echipa</Link>
                        </li>
                        <li className="menu-item">
                          <Link to="/contact-us">Contact</Link>
                        </li>
                      </Nav>
                    </div>
                  </Navbar.Collapse>
                  {/* Last movies & user management */}
                  <div className="navbar-right menu-right">
                    <ul className="d-flex align-items-center list-inline m-0">
                      <Dropdown as="li" className="nav-item">
                        {/* Notifications icon */}
                        <Dropdown.Toggle
                          href="#"
                          as={CustomToggle}
                          variant="search-toggle position-relative"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            width="22"
                            height="22"
                            className="noti-svg"
                          >
                            <path fill="none" d="M0 0h24v24H0z" />
                            <path d="M18 10a6 6 0 1 0-12 0v8h12v-8zm2 8.667l.4.533a.5.5 0 0 1-.4.8H4a.5.5 0 0 1-.4-.8l.4-.533V10a8 8 0 1 1 16 0v8.667zM9.5 21h5a2.5 2.5 0 1 1-5 0z" />
                          </svg>
                          <span className="bg-danger dots"></span>
                        </Dropdown.Toggle>
                        <Dropdown.Menu
                          className="iq-sub-dropdown"
                          align="right"
                        >
                          <Card className="shadow-none m-0">
                            <Card.Body>
                              {/* The last 3 recent movies */}
                              <TheMostRecentMovies />
                            </Card.Body>
                          </Card>
                        </Dropdown.Menu>
                      </Dropdown>
                      <Dropdown as="li" className="nav-item nav-icon">
                        {/* Avatar user */}
                        <Dropdown.Toggle
                          href="#"
                          as={CustomToggle}
                          variant="search-toggle"
                        >
                          <div
                            className="iq-user-dropdown search-toggle p-0 d-flex align-items-center active"
                            data-toggle="search-toggle"
                          >
                            <img
                              src={user}
                              className="img-fluid avatar-40 rounded-circle"
                              alt="user"
                            />
                          </div>
                        </Dropdown.Toggle>
                        {/* Menu options user management */}
                        <Dropdown.Menu
                          className="iq-sub-dropdown iq-user-dropdown"
                          align="right"
                        >
                          <Card className="shadow-none m-0">
                            <Card.Body className="p-0 pl-3 pr-3">
                              {/* View profile */}
                              <Link
                                to="/user-profile"
                                className="iq-sub-card setting-dropdown"
                              >
                                <div className="media align-items-center">
                                  <div className="right-icon">
                                    <i className="ri-file-user-line text-primary"></i>
                                  </div>
                                  <div className="media-body ml-3">
                                    <h6 className="my-0 ">
                                      Vizualizare profil
                                    </h6>
                                  </div>
                                </div>
                              </Link>
                              {/* Settings account */}
                              <Link
                                to="/user-account-settings"
                                className="iq-sub-card setting-dropdown"
                              >
                                <div className="media align-items-center">
                                  <div className="right-icon">
                                    <i className="ri-settings-4-line text-primary"></i>
                                  </div>
                                  <div className="media-body ml-3">
                                    <h6 className="my-0 ">Setări profil</h6>
                                  </div>
                                </div>
                              </Link>
                              {/* My seen movies */}
                              <Link
                                to="/my-seen-movies"
                                className="iq-sub-card setting-dropdown"
                              >
                                <div className="media align-items-center">
                                  <div className="right-icon">
                                    <i className="ri-movie-line text-primary"></i>
                                  </div>
                                  <div className="media-body ml-3">
                                    <h6 className="my-0 ">Filme vizualizate</h6>
                                  </div>
                                </div>
                              </Link>
                              {/* Logout */}
                              <Link
                                to="/welcome/login"
                                className="iq-sub-card setting-dropdown"
                              >
                                <div className="media align-items-center">
                                  <div className="right-icon">
                                    <i className="ri-logout-circle-line text-primary"></i>
                                  </div>
                                  <div className="media-body ml-3">
                                    <h6 className="my-0 ">Deconectare</h6>
                                  </div>
                                </div>
                              </Link>
                            </Card.Body>
                          </Card>
                        </Dropdown.Menu>
                      </Dropdown>
                    </ul>
                  </div>
                </Navbar>
              </Col>
            </Row>
          </Container>
        </div>
      </header>
    </>
  );
}
