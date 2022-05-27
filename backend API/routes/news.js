const router = require("express").Router();
const verify = require("../verifyToken");
const News = require("../models/News");

router.post("/", verify, async (req, res) => {
  if (req.user.isAdmin) {
    const newNews = new News(req.body);
    try {
      const news = await newNews.save();
      res.status(200).json(news);
    } catch (error) {
      res.status(500).json(error);
    }
  } else {
    res
      .status(403)
      .json(
        "Contul pe care îl deții nu este asociat unui cont de administrator, prin urmare nu poți crea nici un articol pentru secțiunea de noutăți a website-ului!"
      );
  }
});

router.get("/", verify, async (req, res) => {
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

router.get("/find/:id", verify, async (req, res) => {
  if (req.user.id === req.params.id || req.user.isAdmin) {
    try {
      const news = await News.findById(req.params.id);
      res.status(200).json(news);
    } catch (error) {
      res.status(500).json(error);
    }
  } else {
    res
      .status(500)
      .json("Pentru a putea vizualiza aceast articol trebuie să fi logat!");
  }
});

router.put("/:id", verify, async (req, res) => {
  if (req.user.isAdmin) {
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
    res
      .status(500)
      .json(
        "Contul pe care îl deții nu este asociat unui cont de administrator, prin urmare nu poți actualiza nici un articol pentru secțiunea de noutăți a website-ului!"
      );
  }
});

router.delete("/:id", verify, async (req, res) => {
  if (req.user.isAdmin) {
    try {
      await News.findByIdAndDelete(req.params.id);
      res
        .status(200)
        .json("Articolul cu id-ul " + req.params.id + " a fost șters!");
    } catch (error) {
      res.status(500).json(error);
    }
  } else {
    res
      .status(403)
      .json(
        "Contul pe care îl deții nu este asociat unui cont de administrator, prin urmare nu poți șterge nici un articol!"
      );
  }
});

module.exports = router;
