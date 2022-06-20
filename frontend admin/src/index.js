import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { AuthenticationContextProvider } from "../src/context/authenticationContext/AuthenticationContext";
import { UserContextProvider } from "./context/userContext/UserContext";
import { MovieContextProvider } from "../src/context/movieContext/MovieContext";
import { CategoryContextProvider } from "../src/context/categoryContext/CategoryContext";
import { BlogContextProvider } from "../src/context/blogContext/BlogContext";
import { MyInformationsContextProvider } from "./context/myInformationsContext/MyInformationsContext";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.Fragment>
    <BrowserRouter>
      <AuthenticationContextProvider>
        <UserContextProvider>
          <MovieContextProvider>
            <CategoryContextProvider>
              <BlogContextProvider>
                <MyInformationsContextProvider>
                  <App />
                </MyInformationsContextProvider>
              </BlogContextProvider>
            </CategoryContextProvider>
          </MovieContextProvider>
        </UserContextProvider>
      </AuthenticationContextProvider>
    </BrowserRouter>
  </React.Fragment>,
  document.getElementById("root")
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
