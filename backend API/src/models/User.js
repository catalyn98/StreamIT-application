const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const crypto = require("crypto");
const jwt = require("jsonwebtoken");

const { Schema } = mongoose;
const userSchema = Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    username: { type: String, required: true, unique: true, lowercase: true },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      unique: true,
    },
    profilePicture: {
      type: String,
      default:
        "https://pkds.ru/wp-content/uploads/2021/12/1_x7X2oAehk5M9IvGwO_K0Pg.png",
    },
    seenMovies: [
      {
        type: Schema.Types.ObjectId,
        ref: "Movie",
      },
    ],
    role: { type: String, default: "user", enum: ["user", "admin"] },
    tokens: [
      {
        token: {
          type: String,
          required: true,
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

userSchema.methods.toJSON = function () {
  const user = this;
  const userObject = user.toObject();
  if (!userObject.role === "admin") {
    delete userObject.updatedAt;
    delete userObject.__v;
  }
  delete userObject.password;
  delete userObject.tokens;
  return userObject;
};

// Generate tokens
userSchema.methods.generateAuthToken = async function () {
  const user = this;
  const token = jwt.sign({ _id: user._id.toString() }, process.env.SECRET_KEY);
  user.tokens = user.tokens.concat({ token });
  await user.save();
  return token;
};

// Find credentials account for login
userSchema.statics.findByCredentials = async (email, password) => {
  const user = await User.findOne({ email });
  if (!user) throw new Error("Această adresă de email nu există!");
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) throw new Error("Parola introdusă nu este corectă!");
  return user;
};

// Encrypt password after update
userSchema.pre("save", async function (next) {
  const user = this;
  if (user.isModified("password")) {
    user.password = await bcrypt.hash(user.password, 8);
  }
  next();
});

// Reset password token
userSchema.methods.getResetPasswordToken = function () {
  const resetToken = crypto.randomBytes(20).toString("hex");
  this.resePasswordToken = crypto
    .createHash("sha256")
    .update(resetToken)
    .digest("hex");
  this.resePasswordToken = Date.now() + 10 * 60 * 1000;
  return resetToken;
};

const User = mongoose.model("User", userSchema);

module.exports = User;
