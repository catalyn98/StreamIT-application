import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { AuthenticationContextProvider } from "../src/context/authenticationContext/AuthenticationContext";
import { MyInformationsContextProvider } from "../src/context/myInformationsContext/MyInformationsContext";
import { MovieContextProvider } from "../src/context/movieContext/MovieContext";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.Fragment>
    <BrowserRouter>
      <AuthenticationContextProvider>
        <MyInformationsContextProvider>
          <MovieContextProvider>
            <App />
          </MovieContextProvider>
        </MyInformationsContextProvider>
      </AuthenticationContextProvider>
    </BrowserRouter>
  </React.Fragment>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
