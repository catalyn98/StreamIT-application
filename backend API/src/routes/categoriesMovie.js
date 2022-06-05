const router = require("express").Router();
const authentication = require("../middlewares/authentication");
const CategoriesMovies = require("../models/CategoriesMovies");

// Create category movie
router.post("/", authentication.verify, async (req, res) => {
  if (req.user.role === "admin") {
    const newGategoriesMovie = new CategoriesMovies(req.body);
    try {
      const categoriesMovies = await newGategoriesMovie.save();
      res.status(200).json(categoriesMovies);
    } catch (error) {
      res.status(500).json(error);
    }
  } else {
    res
      .status(403)
      .json(
        "Contul pe care îl deții nu este asociat unui cont de administrator, prin urmare nu poți crea nici o categorie de filme!"
      );
  }
});

// Update category movie
router.put("/:id", authentication.verify, async (req, res) => {
  if (req.user.role === "admin") {
    try {
      const updateCategoryMovies = await CategoriesMovies.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        {
          new: true,
        }
      );
      res.status(200).json(updateCategoryMovies);
    } catch (error) {
      res.status(500).json(error);
    }
  } else {
    res
      .status(500)
      .json(
        "Contul pe care îl deții nu este asociat unui cont de administrator, prin urmare nu poți actualiza nici o categorie de filme!"
      );
  }
});

// Delete category movie
router.delete("/:id", authentication.verify, async (req, res) => {
  if (req.user.role === "admin") {
    try {
      await CategoriesMovies.findByIdAndDelete(req.params.id);
      res
        .status(200)
        .json(
          "Categoria de filme cu id-ul " + req.params.id + " a fost ștearsă!"
        );
    } catch (error) {
      res.status(500).json(error);
    }
  } else {
    res
      .status(403)
      .json(
        "Contul pe care îl deții nu este asociat unui cont de administrator, prin urmare nu poți șterge nici o categorie de filme!"
      );
  }
});

// Get all categories movies
router.get("/", authentication.verify, async (req, res) => {
  const genreQuery = req.query.genre;
  let list = [];
  try {
    if (genreQuery) {
      list = await CategoriesMovies.aggregate([
        { $sample: { size: 10 } },
        { $match: { genre: genreQuery } },
      ]);
    } else {
      list = await CategoriesMovies.aggregate([{ $sample: { size: 10 } }]);
    }
    res.status(200).json(list);
  } catch (error) {
    res.status(500).json(error);
  }
});

// Get one category movie
router.get("/find/:id", authentication.verify, async (req, res) => {
  try {
    const categoryMovies = await CategoriesMovies.findById(req.params.id);
    res.status(200).json(categoryMovies);
  } catch (error) {
    res.status(500).json(error);
  }
});

// Get total number of categories movies
router.get(
  "/total-number-of-categories-movies",
  authentication.verify,
  async (req, res) => {
    if (req.user.role === "admin") {
      CategoriesMovies.count({}, function (error, result) {
        if (error) {
          res.send(error);
        } else {
          res.json(result);
        }
      });
    } else {
      res
        .status(500)
        .json(
          "Doar administratorul poate vedea numărul total de categorii de filme!!"
        );
    }
  }
);

module.exports = router;
