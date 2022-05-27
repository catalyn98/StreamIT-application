const router = require("express").Router();
const verify = require("../verifyToken");
const CategoriesMovies = require("../models/CategoriesMovies");

router.post("/", verify, async (req, res) => {
  if (req.user.isAdmin) {
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

router.get("/", verify, async (req, res) => {
  try {
    const categoriesMovies = await CategoriesMovies.find();
    res.status(200).json(categoriesMovies.reverse());
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get("/find/:id", verify, async (req, res) => {
  try {
    const categoryMovies = await CategoriesMovies.findById(req.params.id);
    res.status(200).json(categoryMovies);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.put("/:id", verify, async (req, res) => {
  if (req.user.isAdmin) {
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

router.delete("/:id", verify, async (req, res) => {
  if (req.user.isAdmin) {
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

module.exports = router;
