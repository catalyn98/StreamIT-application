import React, { useContext } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Login from "../pages/login/Login";
import MainPagesApp from "./MainPagesApp";
import { AuthenticationContext } from "../context/authenticationContext/AuthenticationContext";

export default function PagesLayout() {
  const { user } = useContext(AuthenticationContext);

  return (
    <Switch>
      <Route exact path="/">
        {user ? <MainPagesApp /> : <Redirect to="/login" />}
      </Route>
      <Route exact path="/users-list">
        {user ? <MainPagesApp /> : <Redirect to="/login" />}
      </Route>
      <Route exact path="/movies-list">
        {user ? <MainPagesApp /> : <Redirect to="/login" />}
      </Route>
      <Route exact path="/add-movie">
        {user ? <MainPagesApp /> : <Redirect to="/login" />}
      </Route>
      <Route exact path="/update-movie/:movieName">
        {user ? <MainPagesApp /> : <Redirect to="/login" />}
      </Route>
      <Route exact path="/categories-movies-list">
        {user ? <MainPagesApp /> : <Redirect to="/login" />}
      </Route>
      <Route exact path="/add-category">
        {user ? <MainPagesApp /> : <Redirect to="/login" />}
      </Route>
      <Route exact path="/update-category-list/:categoryName">
        {user ? <MainPagesApp /> : <Redirect to="/login" />}
      </Route>
      <Route exact path="/blog-posts">
        {user ? <MainPagesApp /> : <Redirect to="/login" />}
      </Route>
      <Route exact path="/add-news">
        {user ? <MainPagesApp /> : <Redirect to="/login" />}
      </Route>
      <Route exact path="/update-news/:newsName">
        {user ? <MainPagesApp /> : <Redirect to="/login" />}
      </Route>
      <Route exact path="/admin-management-account">
        {user ? <MainPagesApp /> : <Redirect to="/login" />}
      </Route>
      <Route exact path="/change-password">
        {user ? <MainPagesApp /> : <Redirect to="/login" />}
      </Route>
      <Route path="/login"> {!user ? <Login /> : <Redirect to="/" />} </Route>
      {user && (
        <>
          <MainPagesApp />
        </>
      )}
    </Switch>
  );
}
