import { Switch, Route } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import Home from "../pages/home/Home";
import Movies from "../pages/movies/Movies";
import Blog from "../pages/blog/Blog";
import Team from "../pages/team/Team";
import ContactUs from "../pages/contact-us/ContactUs";
import UserAccountSettings from "../pages/user-management/UserAccountSettings";
import UserProfile from "../pages/user-management/UserProfile";
import MovieDetails from "../pages/movie-details/MovieDetails";
import TermsOfUse from "../pages/extra-pages/TermsOfUse";
import PrivacyPolicy from "../pages/extra-pages/PrivacyPolicy";
import FAQ from "../pages/extra-pages/FAQ";
import SeenMovies from "../pages/seen-movies/SeenMovies";

const MainPages = () => {
  return (
    <TransitionGroup>
      <CSSTransition classNames="fade" timeout={300}>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/movies" component={Movies} />
          <Route path="/blog" component={Blog} />
          <Route path="/team" component={Team} />
          <Route path="/contact-us" component={ContactUs} />
          <Route path="/movie-details" component={MovieDetails} />
          <Route path="/user-profile" component={UserProfile} />
          <Route
            path="/user-account-settings"
            component={UserAccountSettings}
          />
          <Route path="/terms-of-use" component={TermsOfUse} />
          <Route path="/privacy-policy" component={PrivacyPolicy} />
          <Route path="/FAQ" component={FAQ} />
          <Route path="/my-seen-movies" component={SeenMovies} />
        </Switch>
      </CSSTransition>
    </TransitionGroup>
  );
};

export default MainPages;
