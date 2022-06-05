const router = require("express").Router();
const authentication = require("../middlewares/authentication");
const Movie = require("../models/Movie");

// Create movie
router.post("/", authentication.verify, async (req, res) => {
  if (req.user.role === "admin") {
    const newMovie = new Movie(req.body);
    try {
      const movie = await newMovie.save();
      res.status(201).json(movie);
    } catch (error) {
      res.status(500).json(error);
    }
  } else {
    res.status(403).json("Nu ai dreptul de a adăuga filme!");
  }
});

// Update movie
router.put("/:id", authentication.verify, async (req, res) => {
  if (req.user.role === "admin") {
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
    res.status(500).json("Nu ai dreptul de a actualiza filme!");
  }
});

// Delete movie
router.delete("/:id", authentication.verify, async (req, res) => {
  if (req.user.role === "admin") {
    try {
      await Movie.findByIdAndDelete(req.params.id);
      res
        .status(200)
        .json("Filmul cu id-ul " + req.params.id + " a fost șters!");
    } catch (error) {
      res.status(500).json(error);
    }
  } else {
    res.status(403).json("Nu ai dreptul de a șterge filme!");
  }
});

// Get all movies
router.get("/", authentication.verify, async (req, res) => {
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

// Get one movie
router.get("/find/:id", authentication.verify, async (req, res) => {
  try {
    const movie = await Movie.findById(req.params.id);
    res.status(200).json(movie);
  } catch (error) {
    res.status(500).json(error);
  }
});

// Get random movies
router.get("/randomMovie", authentication.verify, async (req, res) => {
  try {
    const movie = await Movie.aggregate([{ $sample: { size: 1 } }]);
    res.status(200).json(movie);
  } catch (error) {
    res.status(500).json(error);
  }
});

// Get movies statistics by genre
router.get("/statistics", authentication.verify, async (req, res) => {
  if (req.user.role === "admin") {
    try {
      const data = await Movie.aggregate([
        {
          $project: {
            Genre: { _id: "$genre" },
          },
        },
        {
          $group: {
            _id: "$Genre",
            total: { $sum: 1 },
          },
        },
      ]);
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json(error);
    }
  } else {
    res
      .status(500)
      .json(
        "Doar administratorul poate vedea statisticile legate de numărul de filme în funcție de gen!"
      );
  }
});

// Get total number of movies
router.get(
  "/total-number-of-movies",
  authentication.verify,
  async (req, res) => {
    if (req.user.role === "admin") {
      Movie.count({}, function (error, result) {
        if (error) {
          res.send(error);
        } else {
          res.json(result);
        }
      });
    } else {
      res
        .status(500)
        .json("Doar administratorul poate vedea numărul total de filme!");
    }
  }
);

module.exports = router;
