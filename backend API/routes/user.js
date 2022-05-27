const router = require("express").Router();
const User = require("../models/User");
const CryptoJS = require("crypto-js");
const verify = require("../verifyToken");

router.get("/find/:id", verify, async (req, res) => {
  if (req.user.id === req.params.id || req.user.isAdmin) {
    try {
      const user = await User.findById(req.params.id);
      const { password, ...info } = user._doc;
      res.status(200).json(info);
    } catch (error) {
      res.status(500).json(error);
    }
  } else {
    res
      .status(500)
      .json(
        "Contul pe care îl deții nu este asociat unui cont de administrator, prin urmare îți poți vedea doar detaliile propriul cont!"
      );
  }
});

router.put("/:id", verify, async (req, res) => {
  if (req.user.id === req.params.id) {
    if (req.body.password) {
      req.body.password = CryptoJS.AES.encrypt(
        req.body.password,
        process.env.SECRET_KEY
      ).toString();
    }
    try {
      const updateUser = await User.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        {
          new: true,
        }
      );
      res.status(200).json(updateUser);
    } catch (error) {
      res.status(500).json(error);
    }
  } else {
    res.status(500).json("Nu poți actualiza datele altui cont!");
  }
});

router.delete("/:id", verify, async (req, res) => {
  if (req.user.isAdmin) {
    try {
      await User.findByIdAndDelete(req.params.id);
      res
        .status(200)
        .json("Utilizatorul cu id-ul " + req.params.id + " a fost șters!");
    } catch (error) {
      res.status(500).json(error);
    }
  } else {
    res.status(500).json("Contul poate fi șters doar de administrator!");
  }
});

router.get("/", verify, async (req, res) => {
  const query = req.query.new;
  if (req.user.isAdmin) {
    try {
      const users = query
        ? await User.find().sort({ _id: -1 }).limit(5)
        : await User.find();
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json(error);
    }
  } else {
    res
      .status(500)
      .json(
        "Contul pe care îl deții nu este asociat unui cont de administrator, prin urmare nu poți vedea întreaga listă de utilizatori și informațiile asociate acestora!"
      );
  }
});

router.get("/statistics", verify, async (req, res) => {
  if (req.user.isAdmin) {
    try {
      const data = await User.aggregate([
        {
          $project: {
            month: { $month: "$createdAt" },
          },
        },
        {
          $group: {
            _id: "$month",
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
        "Contul pe care îl deții nu este asociat unui cont de administrator, prin urmare nu poți vedea statisticile legate de utilizatori!"
      );
  }
});

router.get("/total-users", verify, async (req, res) => {
  if (req.user.isAdmin) {
    User.count({}, function (err, result) {
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
        "Contul pe care îl deții nu este asociat unui cont de administrator, prin urmare nu poți vedea numărul total de utilizatori!"
      );
  }
});

module.exports = router;
