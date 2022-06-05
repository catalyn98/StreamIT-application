const express = require("express");
const app = express();

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config("./.env");
}
require("../src/db/mongoose");

const userRouter = require("./routes/user");
const movieRouter = require("./routes/movie");
const categoriesMoviesRouter = require("./routes/categoriesMovie");
const newsRouter = require("./routes/news");

app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers,X-Access-Token,XKey,Authorization"
  );
  next();
});
app.use(express.json());
app.use("/api/user", userRouter);
app.use("/api/movie", movieRouter);
app.use("/api/categories-movies", categoriesMoviesRouter);
app.use("/api/news", newsRouter);

app.listen(8800, () => {
  console.log("Serverul de beckend rulează!");
});
