const mongoose = require("mongoose");

mongoose
  // connect to database
  .connect(process.env.MONGODB_URI)
  .then(() =>
    console.log("Conectarea la baza de date s-a realizat cu succes!")
  );
