const router = require("express").Router();
const authentication = require("../middlewares/authentication");
const News = require("../models/News");

// Create post
router.post("/", authentication.verify, async (req, res) => {
  if (req.user.role === "admin") {
    const newNews = new News(req.body);
    try {
      const news = await newNews.save();
      res.status(200).json(news);
    } catch (error) {
      res.status(500).json(error);
    }
  } else {
    res.status(403).json("Nu ai dreptul de a adăuga postări!");
  }
});

// Update post
router.put("/:id", authentication.verify, async (req, res) => {
  if (req.user.role === "admin") {
    try {
      const updateNews = await News.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        {
          new: true,
        }
      );
      res.status(200).json(updateNews);
    } catch (error) {
      res.status(500).json(error);
    }
  } else {
    res.status(500).json("Nu ai dreptul de a actualiza postări!");
  }
});

// Delete post
router.delete("/:id", authentication.verify, async (req, res) => {
  if (req.user.role === "admin") {
    try {
      await News.findByIdAndDelete(req.params.id);
      res
        .status(200)
        .json("Articolul cu id-ul " + req.params.id + " a fost șters!");
    } catch (error) {
      res.status(500).json(error);
    }
  } else {
    res.status(403).json("Nu ai dreptul de a șterge postări!");
  }
});

// Get all posts
router.get("/", authentication.verify, async (req, res) => {
  const query = req.query.new;
  try {
    const news = query
      ? await News.find().sort({ _id: -1 }).limit(3)
      : await News.find();
    res.status(200).json(news.reverse());
  } catch (error) {
    res.status(500).json(error);
  }
});

// Get one post
router.get("/find/:id", authentication.verify, async (req, res) => {
  try {
    const news = await News.findById(req.params.id);
    res.status(200).json(news);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
