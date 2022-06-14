import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import { AuthenticationContextProvider } from "../src/context/authenticationContext/AuthenticationContext";
import { UserContextProvider } from "./context/userContext/UserContext";
import { MyInformationContextProvider } from "./context/myInformationContext/MyInformationContext";
import { MovieContextProvider } from "../src/context/movieContext/MovieContext";
import { CategoryContextProvider } from "../src/context/categoryContext/CategoryContext";
import { BlogContextProvider } from "../src/context/blogContext/BlogContext";

ReactDOM.render(
  <React.Fragment>
    <BrowserRouter>
      <AuthenticationContextProvider>
        <UserContextProvider>
          <MovieContextProvider>
            <CategoryContextProvider>
              <BlogContextProvider>
                <MyInformationContextProvider>
                  <App />
                </MyInformationContextProvider>
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
