const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    username: { type: String, required: true, unique: true, lowercase: true },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      validate(value) {
        if (!validator.isEmail(value)) {
          throw new Error("Email-ul furnizat nu este valid!");
        }
      },
    },
    password: {
      type: String,
      required: true,
      validate(value) {
        if (
          value.toLowerCase().includes("password") ||
          value.toLowerCase().includes("parolă")
        ) {
          throw new Error(
            "Parola nu poate conține cuvintele password sau parolă!"
          );
        }
      },
    },
    phoneNumber: {
      type: String,
      default: "Introdu un număr de telefon",
      unique: true,
      validate(value) {
        if (!validator.isMobilePhone(value)) {
          throw new Error("Numărul de telefon furnizat este invalid!");
        }
      },
    },
    profilePicture: { type: String },
    role: { type: String, default: "user", enum: ["user", "admin"] },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);
