const mongoose = require("mongoose");

const newsSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    image: { type: String, required: true },
    description: { type: String, required: true },
    category: { type: String, rquired: true },
    tags: { type: Array, required: true },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("News", newsSchema);
