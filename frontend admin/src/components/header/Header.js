import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Navbar, Button, Nav, Dropdown } from "react-bootstrap";
import Card from "../card/Card";
import CustomToggle from "../dropdown/Dropdown";
import userAvatar from "../../assets/images/user/01.png";
import logo from "../../../src/assets/images/logo.png";
import { AuthenticationContext } from "../../context/authenticationContext/AuthenticationContext";
import { MyInformationContext } from "../../context/myInformationContext/MyInformationContext";
import { logout } from "../../context/authenticationContext/AuthenticationAction";
import { getMyInformation } from "../../context/myInformationContext/apiCalls";

export default function Header() {
  const { user, dispatchMyInformation } = useContext(MyInformationContext);
  const { dispatch } = useContext(AuthenticationContext);

  useEffect(() => {
    getMyInformation(dispatchMyInformation);
  }, [dispatchMyInformation]);

  const minisidbar = () => {
    document.body.classList.toggle("sidebar-main");
  };

  return (
    <div className="iq-top-navbar">
      <div className="iq-navbar-custom">
        <Navbar className="p-0" expand="lg">
          {/* Responsive menu */}
          <div className="iq-menu-bt d-flex align-items-center">
            {/* Hamburger menu for sidebar */}
            <div className="wrapper-menu" onClick={minisidbar}>
              <div className="main-circle">
                <i className="las la-bars"></i>
              </div>
            </div>
            <div className="iq-navbar-logo d-flex justify-content-between">
              <Link to="#" className="header-logo">
                <img src={logo} className="img-fluid rounded-normal" alt="" />
                <div className="logo-title">
                  {/* Cinema name */}
                  <span className="text-primary text-uppercase">StreamIT</span>
                </div>
              </Link>
            </div>
          </div>
          <div className="iq-search-bar ml-auto"></div>
          {/* Fries menu */}
          <Navbar.Toggle as={Button} aria-controls="responsive-navbar-nav">
            <i className="ri-menu-3-line"></i>
          </Navbar.Toggle>
          {/* Options header menu */}
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav as="ul" className="ml-auto navbar-list iq-header">
              {/* Icon notifications */}
              <Dropdown as="li" className="nav-item nav-icon">
                <Dropdown.Toggle
                  as={CustomToggle}
                  href="#"
                  variant="search-toggle iq-waves-effect text-gray rounded"
                >
                  <span
                    className="ripple rippleEffect"
                    style={{
                      width: "35px",
                      height: "35px",
                      top: "0.5px",
                      left: "-8.5px",
                    }}
                  ></span>
                  <i className="ri-notification-2-line"></i>
                  <span className="bg-primary dots"></span>
                </Dropdown.Toggle>
              </Dropdown>
              {/* Messages notifications */}
              <Dropdown as="li" className="nav-item nav-icon dropdown">
                <Dropdown.Toggle
                  as={CustomToggle}
                  href="#"
                  variant="search-toggle"
                >
                  <div className="search-toggle iq-waves-effect text-gray rounded">
                    <i className="ri-mail-line"></i>
                    <span className="bg-primary dots"></span>
                  </div>
                </Dropdown.Toggle>
              </Dropdown>
              {/* Admin profile */}
              <Dropdown as="li" className="line-height pt-3">
                <Dropdown.Toggle
                  href="#"
                  as={CustomToggle}
                  variant="search-toggle iq-waves-effect d-flex align-items-center"
                >
                  {/* Profile picture admin */}
                  <img
                    src={user.profilePicture || userAvatar}
                    className="img-fluid rounded-circle mr-3"
                    alt="user"
                  />
                </Dropdown.Toggle>
                <Dropdown.Menu
                  className="iq-sub-dropdown iq-user-dropdown m-0"
                  align="right"
                >
                  <Card className="shadow-none m-0">
                    <Card.Header className="d-flex justify-content-start bg-primary p-0">
                      <div className="bg-primary p-3">
                        {/* Admin name */}
                        <h5 className="mb-0 text-white line-height">
                          Salutare {user.lastName}
                        </h5>
                      </div>
                    </Card.Header>
                    <Card.Body className="p-0 ">
                      {/* View admin profile */}
                      <Link
                        to="/admin-management-account"
                        className="iq-sub-card iq-bg-primary-hover"
                      >
                        <div className="media align-items-center">
                          <div className="rounded iq-card-icon iq-bg-primary">
                            <i className="ri-file-user-line"></i>
                          </div>
                          <div className="media-body ml-3">
                            <h6 className="mb-0 ">Profil</h6>
                            <p className="mb-0 font-size-12 iq-text">
                              Actualizează detaliile profilului
                            </p>
                          </div>
                        </div>
                      </Link>
                      {/* Sign out button */}
                      <div className="d-inline-block w-100 text-center p-3">
                        <Link
                          className="bg-primary iq-sign-btn"
                          to="/login"
                          role="button"
                        >
                          <span onClick={() => dispatch(logout())}>
                            Deconectare
                          </span>
                          <i className="ri-login-box-line ml-2"></i>
                        </Link>
                      </div>
                    </Card.Body>
                  </Card>
                </Dropdown.Menu>
              </Dropdown>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </div>
  );
}
