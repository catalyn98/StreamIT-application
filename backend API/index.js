const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const authenticationRoute = require("./routes/authentication");
const userRouter = require("./routes/user");
const movieRouter = require("./routes/movie");
const categoriesMoviesRouter = require("./routes/categoriesMovie");
const newsRouter = require("./routes/news");

main().catch((err) => console.log(err));

async function main() {
  await mongoose
    .connect(process.env.MONGO_URL)
    .then(() =>
      console.log("Conectarea la baza de date s-a realizat cu succes!")
    );
}

app.use(express.json());
app.use("/api/authentication", authenticationRoute);
app.use("/api/user", userRouter);
app.use("/api/movie", movieRouter);
app.use("/api/categories-movies", categoriesMoviesRouter);
app.use("/api/news", newsRouter);

app.listen(8800, () => {
  console.log("Serverul de beckend rulează!");
});
