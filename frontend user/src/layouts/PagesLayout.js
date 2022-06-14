import React, { useContext } from "react";
import { Link, Switch, Route, Redirect } from "react-router-dom";
import MainPages from "../router/MainPages";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import RecoveryPassword from "../pages/recovery-password/RecoveryPassword";
import { AuthenticationContext } from "../context/authenticationContext/AuthenticationContext";

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

  const { user } = useContext(AuthenticationContext);

  return (
    <Switch>
      <Route exact path="/">
        {user ? <MainPages /> : <Redirect to="/login" />}
      </Route>
      <Route exact path="/movies">
        {user ? <MainPages /> : <Redirect to="/login" />}
      </Route>
      <Route exact path="/blog">
        {user ? <MainPages /> : <Redirect to="/login" />}
      </Route>
      <Route exact path="/team">
        {user ? <MainPages /> : <Redirect to="/login" />}
      </Route>
      <Route exact path="/contact-us">
        {user ? <MainPages /> : <Redirect to="/login" />}
      </Route>
      <Route exact path="/movie-details/:movieName">
        {user ? <MainPages /> : <Redirect to="/login" />}
      </Route>
      <Route exact path="/user-profile">
        {user ? <MainPages /> : <Redirect to="/login" />}
      </Route>
      <Route exact path="/user-account-settings">
        {user ? <MainPages /> : <Redirect to="/login" />}
      </Route>
      <Route exact path="/terms-of-use">
        {user ? <MainPages /> : <Redirect to="/login" />}
      </Route>
      <Route exact path="/privacy-policy">
        {user ? <MainPages /> : <Redirect to="/login" />}
      </Route>
      <Route exact path="/FAQ">
        {user ? <MainPages /> : <Redirect to="/login" />}
      </Route>
      <Route exact path="/my-seen-movies">
        {user ? <MainPages /> : <Redirect to="/login" />}
      </Route>
      <Route exact path="/all-movies">
        {user ? <MainPages /> : <Redirect to="/login" />}
      </Route>
      <Route path="/login"> {!user ? <Login /> : <Redirect to="/" />} </Route>
      <Route path="/register" component={Register} />
      <Route path="/recovery-password" component={RecoveryPassword} />
      {user && (
        <>
          <div id="back-to-top">
            <Link className="top" to="#" id="top">
              {" "}
              <i className="fa fa-angle-up"></i>{" "}
            </Link>
          </div>
          <div className="wraper">
            <div className="content-page" id="content-page">
              <MainPages />
            </div>
          </div>
        </>
      )}
    </Switch>
  );
};

export default PagesLayout;
