import React from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import Dashbord from "../pages/dashborad/Dashboard";
import AdminManagementAccount from "../pages/admin-management/AdminManagementAccount";
import ChangeAdminPassword from "../pages/admin-management/ChangeAdminPassword";
import UsersList from "../pages/users-list/UsersList";
import MoviesList from "../pages/movie/MoviesList";
import AddMovie from "../pages/movie/AddMovie";
import CategoriesList from "../pages/category/CategoriesList";
import AddCategory from "../pages/category/AddCategoryList";
import NewsList from "../pages/news/NewsList";
import AddNews from "../pages/news/AddNews";

const MainPages = () => {
  let location = useLocation();

  return (
    <TransitionGroup>
      <CSSTransition key={location.key} classNames="fade" timeout={300}>
        <Switch location={location}>
          <Route path="/" exact component={Dashbord} />
          <Route path="/users-list" exact component={UsersList} />
          <Route path="/movies-list" exact component={MoviesList} />
          <Route path="/add-movie" exact component={AddMovie} />
          <Route
            path="/categories-movies-list"
            exact
            component={CategoriesList}
          />
          <Route path="/add-category" exact component={AddCategory} />
          <Route path="/blog-posts" exact component={NewsList} />
          <Route path="/add-news" exact component={AddNews} />
          <Route
            path="/admin-management-account"
            exact
            component={AdminManagementAccount}
          />
          <Route
            path="/change-password"
            exact
            component={ChangeAdminPassword}
          />
        </Switch>
      </CSSTransition>
    </TransitionGroup>
  );
};

export default MainPages;
