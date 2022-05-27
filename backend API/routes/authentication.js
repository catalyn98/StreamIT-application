const router = require("express").Router();
const User = require("../models/User");
const jwt = require("jsonwebtoken");
const CryptoJS = require("crypto-js");

router.post("/register", async (req, res) => {
  const newUser = new User({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    username: req.body.username,
    email: req.body.email,
    password: CryptoJS.AES.encrypt(
      req.body.password,
      process.env.SECRET_KEY
    ).toString(),
    phoneNumber: req.body.phoneNumber,
  });
  try {
    const user = await newUser.save();
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    !user && res.status(401).json("Adresa de email introdusă nu există!");
    const bytes = CryptoJS.AES.decrypt(user.password, process.env.SECRET_KEY);
    const originalPassword = bytes.toString(CryptoJS.enc.Utf8);
    originalPassword !== req.body.password &&
      res.status(401).json("Parola introdusă nu este corectă!");
    const accessToken = jwt.sign(
      {
        id: user._id,
        isAdmin: user.role === "admin",
      },
      process.env.SECRET_KEY,
      { expiresIn: "30d" }
    );
    const { password, ...info } = user._doc;
    res.status(200).json({ ...info, accessToken });
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
