const mongoose = require("mongoose");
const { Schema } = mongoose;

const categoriesMoviesSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    genre: { type: String, required: true },
    content: [{ type: Schema.Types.ObjectId, ref: "Movie" }],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("CategoriesMovies", categoriesMoviesSchema);
