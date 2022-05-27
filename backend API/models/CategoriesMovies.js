const mongoose = require("mongoose");

const categoriesMoviesSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    genre: { type: String, required: true },
    content: { type: Array, required: true },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("CategoriesMovies", categoriesMoviesSchema);
