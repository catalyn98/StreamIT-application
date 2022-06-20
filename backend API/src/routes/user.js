const router = require("express").Router();
const User = require("../models/User");
const authentication = require("../middlewares/authentication");
const accessKey = require("../utils/generateAccessKey");
const transporter = require("../utils/transporter");

// Register
router.post("/register", async (req, res) => {
  try {
    const user = new User({
      email: req.body.email,
      username: req.body.username,
      password: req.body.password,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      phoneNumber: req.body.phoneNumber,
    });
    await user.save();
    const token = await user.generateAuthToken();
    res.status(201).send({ user, token });
  } catch (error) {
    res.status(400).send(error);
  }
});

// Login
router.post("/login", async (req, res) => {
  try {
    const user = await User.findByCredentials(
      req.body.email,
      req.body.password
    );
    const token = await user.generateAuthToken();
    res.send({ user, token });
  } catch (error) {
    res.status(400).send(error);
  }
});

// Logout
router.post("/logout", authentication.verify, async (req, res) => {
  try {
    req.user.tokens = req.user.tokens.filter((token) => {
      return token.token !== req.token;
    });
    await req.user.save();
    res.send({ message: "Te-ai delogat cu succes!" });
  } catch (error) {
    res.status(400).send(error);
  }
});

// Request reset password
router.post("/reset-password", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (user) {
      user.tokens = [];
      user.password = accessKey.generateAccessKey();
      const key = user.password;
      const msg = {
        from: process.env.USER,
        to: user.email,
        subject: "Instrucțiuni resetare parolă",
        html: `<!doctype html>
          <html>
            <head>
            <style>
              img {
                width: 250px;
                height: 200px;
                display: block;
                margin-left: auto;
                margin-right: auto;
              }
              p, li {
                margin-left: 40px;
                font-size: 15px;
              } 
              .credentials {
                font-weight: 600;
              }
              .footer {
                position: fixed;
                left: 0;
                bottom: 0;
                width: 100%;
                color: black;
                text-align: right;
                font-style: oblique;
                font-weight: 700;
             }
             .userAccountSettings {
                font-style: oblique;
             }
             .team {
              font-style: oblique;
              text-align: right;
              font-weight: 700;
             }
             .name {
               color: red;
             }
             ul {
              list-style-type: disc;
             }
             a:link {
              color: blue;
              background-color: transparent;
              text-decoration: none;
            }
            a:hover {
              color: red;
              background-color: transparent;
            }
            .contactInfo {
              font-style: oblique;
            }
            </style>
              <meta charset="utf-8">
            </head>
            <body>
              <img src="https://t4.ftcdn.net/jpg/04/65/91/57/360_F_465915770_HsbKRqP7PQnoGnNn5dyYRlODYZQI9PNu.jpg" alt="image">
              <p>Salut,</p>
              <p>Ai primit acest email, deoarece ai solicitat resetarea parolei pentru contul tău de StreamIT.</p>
              <p>Parola ta de autentificare a fost schimbată, iar ca urmare a acestui lucru ai fost deconectat automat de pe toate dispozitivele pe care ai fost logat anterior. 
              Pentru a te putea autentifica din nou în aplicație navighează la pagina de <a href="http://localhost:3000/welcome/login">Conectare</a> și completează câmpurile din formular cu următoarele date:</p>
              <ul>
                <li>email: <span class="credentials">${user.email}</span></li>
                <li>parolă: <span class="credentials">${key}</span></li>
              </ul>
              <p>După autentificare te rugăm să îți schimbi parola accesând pagina <a href="http://localhost:3000/user-account-settings">Setări profil</a>.</p>
              <p>Dacă ai orice fel de neclarități în legătură cu procesul de autentificare nu ezita să ne contactezi prin email la adresa <span class="contactInfo">hello@streamit.com</span> sau telefonic la numărul <span class="contactInfo">+(40) 737 728 737</span>.</p>
              <p>Toate cele bune!</p>
              <div>
                <p class="team">Echipa StreamIT</p>
              </div>
              <div class="footer">
                <p>© 2022 <span class="name">StreamIT</span>. Toate drepturile rezervate!</p>
              </div>
            </body>
          </html>`,
      };
      const info = await transporter.sendMail(msg);
      console.log(info);
      await user.save();
      res.send({
        message:
          "Toate token-urile de acces ale utilizatorului " +
          user.username +
          " au fost șterse!",
      });
    } else res.status(404).json("Această adresă de email nu există!");
  } catch (error) {
    res.status(400).send(error);
  }
});

// send message to the administrator
router.post("/contact", async (req, res) => {
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const phoneNumber = req.body.phoneNumber;
  const emailAddress = req.body.emailAddress;
  const message = req.body.message;
  const mail = {
    from: process.env.USER,
    to: process.env.YAHOO_MAIL,
    subject: "Mesaj din partea lui " + firstName + " " + lastName,
    html: `<!doctype html>
      <html>
        <head>
          <style>
            img {
              width: 280px;
              height: 200px;
              display: block;
              margin-left: auto;
              margin-right: auto;
            }
            p, li {
              margin-left: 40px;
              font-size: 15px;
            } 
            .message {
              font-style: oblique;
            }
            .contactInfo {
              font-weight: 600;
            }
            .footer {
              position: fixed;
              left: 0;
              bottom: 0;
              width: 100%;
              color: black;
              text-align: right;
              font-style: oblique;
              font-weight: 700;
           }
           .name {
            color: red;
           }
          </style>
          <meta charset="utf-8">
        </head>
        <body>
           <img src="https://cdni.iconscout.com/illustration/premium/thumb/message-notification-in-laptop-with-coffee-cup-3178506-2670442.png" alt="image">
           <p>Bună ziua ați primit un mesaj din partea lui ${firstName} ${lastName}.</p>
           <p>Mesajul trimis este următorul:</p>
           <p class="message">${message}</p>
           <p>Dacă doriți să luați legătura cu ${lastName} datele sale de contact pe care le-a furnizat sunt următoarele:</p>
           <ul>
            <li>Nume: <span class="contactInfo">${firstName}</span></li>
            <li>Prenume: <span class="contactInfo">${lastName}</span></li>
            <li>Adresă de email: <span class="contactInfo">${emailAddress}</span></li>
            <li>Număr de telefon: <span class="contactInfo">${phoneNumber}</span></li>
           </ul>
           <div class="footer">
            <p>© 2022 <span class="name">StreamIT</span>. Toate drepturile rezervate!</p>
           </div>
        </body>
      </html>`,
  };
  const info = await transporter.sendMail(mail);
  console.log(info);
  res.send({
    message: "A fost trimis un mesaj!",
  });
});

// Update user
router.put("/:id", authentication.verify, async (req, res) => {
  if (req.user.id === req.params.id) {
    const updates = Object.keys(req.body);
    try {
      const { user } = req;
      updates.forEach((update) => (user[update] = req.body[update]));
      await user.save();
      res.send(user);
    } catch (error) {
      res.status(400).send(error);
    }
  } else {
    res.status(500).json("Îți poți actualiza doar propriului cont!");
  }
});

// Delete user
router.delete("/:id", authentication.verify, async (req, res) => {
  if (req.user.role === "admin") {
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

// Get all users
router.get("/", authentication.verify, async (req, res) => {
  const query = req.query.new;
  if (req.user.role !== "admin")
    return res.status(400).send({
      message:
        "Doar administratorul poate vedea întreaga listă de utilizatori!",
    });
  try {
    const users = query
      ? (await User.find().sort({ _id: -1 }).limit(5)).reverse()
      : await User.find();
    res.status(200).json(users.reverse());
  } catch (error) {
    res.status(500).json(error);
  }
});

// Get one user
router.get("/find/:id", authentication.verify, async (req, res) => {
  if (req.user.id === req.params.id || req.user.role === "admin") {
    try {
      const user = await User.findById(req.params.id);
      const { password, ...info } = user._doc;
      res.status(200).json(info);
    } catch (error) {
      res.status(500).json(error);
    }
  } else {
    res.status(500).json("Îți poți vedea doar detaliile propriului cont!");
  }
});

// Get users statistics
router.get("/statistics", authentication.verify, async (req, res) => {
  if (req.user.role === "admin") {
    try {
      const data = await User.aggregate([
        {
          $project: {
            Month: { $month: "$createdAt" },
          },
        },
        {
          $group: {
            _id: "$Month",
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
        "Doar administratorul poate vedea statisticile legate de numărul de înregistrări!"
      );
  }
});

// Get total number of users
router.get(
  "/total-number-of-users",
  authentication.verify,
  async (req, res) => {
    if (req.user.role === "admin") {
      User.count({}, function (error, result) {
        if (error) {
          res.send(error);
        } else {
          res.json(result);
        }
      });
    } else {
      res
        .status(500)
        .json("Doar administratorul poate vedea numărul total de utilizatori!");
    }
  }
);

// Add watched movie to user
router.put("/:id/:movieId", authentication.verify, async (req, res) => {
  const { user } = req;
  const existsMovieInList =
    user.seenMovies && user.seenMovies.includes(req.params.movieId);
  if (!existsMovieInList) {
    if (req.user.id === req.params.id) {
      const updates = Object.keys(req.body);
      try {
        await User.findByIdAndUpdate(
          { _id: req.user.id },
          {
            $addToSet: {
              seenMovies: [{ _id: req.params.movieId }],
            },
          }
        );
        user.save();
        res.send(user);
      } catch (error) {
        res.status(400).send(error);
      }
    } else {
      res.status(500).json("Filmul s-a adăugat în lista de filme vizionate!");
    }
  } else return null;
});

module.exports = router;
