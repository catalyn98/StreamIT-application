const jwt = require("jsonwebtoken");

function verify(req, res, next) {
  const authenticationHeader = req.headers.token;
  if (authenticationHeader) {
    const token = authenticationHeader.split(" ")[1];
    jwt.verify(token, process.env.SECRET_KEY, (err, user) => {
      if (err) res.status(403).json("Token-ul nu este valid!");
      req.user = user;
      next();
    });
  } else {
    return res.status(401).json("Nu ești autentificat!");
  }
}

module.exports = verify;
