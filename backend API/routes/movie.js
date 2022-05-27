const router = require("express").Router();
const verify = require("../verifyToken");
const Movie = require("../models/Movie");

router.post("/", verify, async (req, res) => {
  if (req.user.isAdmin) {
    const newMovie = new Movie(req.body);
    try {
      const movie = await newMovie.save();
      res.status(201).json(movie);
    } catch (error) {
      res.status(500).json(error);
    }
  } else {
    res
      .status(403)
      .json(
        "Contul pe care îl deții nu este asociat unui cont de administrator, prin urmare nu poți adăuga nici un film!"
      );
  }
});

router.put("/:id", verify, async (req, res) => {
  if (req.user.isAdmin) {
    try {
      const updateMovie = await Movie.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        {
          new: true,
        }
      );
      res.status(200).json(updateMovie);
    } catch (error) {
      res.status(500).json(error);
    }
  } else {
    res
      .status(500)
      .json(
        "Contul pe care îl deții nu este asociat unui cont de administrator, prin urmare nu poți actualiza nici un film!"
      );
  }
});

router.delete("/:id", verify, async (req, res) => {
  if (req.user.isAdmin) {
    try {
      await Movie.findByIdAndDelete(req.params.id);
      res
        .status(200)
        .json("Filmul cu id-ul " + req.params.id + " a fost șters!");
    } catch (error) {
      res.status(500).json(error);
    }
  } else {
    res
      .status(403)
      .json(
        "Contul pe care îl deții nu este asociat unui cont de administrator, prin urmare nu poți șterge nici un film!"
      );
  }
});

router.get("/find/:id", verify, async (req, res) => {
  try {
    const movie = await Movie.findById(req.params.id);
    res.status(200).json(movie);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get("/", verify, async (req, res) => {
  const query = req.query.new;
  try {
    const movies = query
      ? await Movie.find().sort({ _id: -1 }).limit(3)
      : await Movie.find();
    res.status(200).json(movies.reverse());
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get("/randomMovie", verify, async (req, res) => {
  try {
    const movie = await Movie.aggregate([{ $sample: { size: 1 } }]);
    res.status(200).json(movie);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
