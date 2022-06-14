import React from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import Dashbord from "../pages/dashborad/Dashboard";
import AdminManagementAccount from "../pages/admin-management/AdminManagementAccount";
import UsersList from "../pages/users-list/UsersList";
import MoviesList from "../pages/movie/MoviesList";
import AddMovie from "../pages/movie/AddMovie";
import UpdateMovie from "../pages/movie/UpdateMovie";
import CategoriesList from "../pages/category/CategoriesList";
import AddCategory from "../pages/category/AddCategoryList";
import UpdateCategoryList from "../pages/category/UpdateCategoryList";
import NewsList from "../pages/news/NewsList";
import AddNews from "../pages/news/AddNews";
import UpdateNews from "../pages/news/UpdateNews";

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
            path="/update-movie/:movieName"
            exact
            component={UpdateMovie}
          />
          <Route
            path="/categories-movies-list"
            exact
            component={CategoriesList}
          />
          <Route path="/add-category" exact component={AddCategory} />
          <Route
            path="/update-category-list/:categoryName"
            exact
            component={UpdateCategoryList}
          />
          <Route path="/blog-posts" exact component={NewsList} />
          <Route path="/add-news" exact component={AddNews} />
          <Route path="/update-news/:newsName" exact component={UpdateNews} />
          <Route
            path="/admin-management-account"
            exact
            component={AdminManagementAccount}
          />
        </Switch>
      </CSSTransition>
    </TransitionGroup>
  );
};

export default MainPages;
