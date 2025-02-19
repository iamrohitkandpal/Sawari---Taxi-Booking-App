import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jsonwebtoken from "jsonwebtoken";

const userSchema = new mongoose.Schema({
  fullname: {
    firstname: {
      type: String,
      required: true,
      minLength: [3, "First Name must be at least 3 characters long"],
    },
    lastname: {
      type: String,
      minLength: [3, "Last Name must be at least 3 characters long"],
    },
  },
  email: {
    type: String,
    unique: true,
    required: true,
    minLength: [5, "Email must be at least 5 characters long"],
  },
  password: {
    type: String,
    required: true,
    select: false,
    minLength: [6, "Password must be at least 6 characters long"],
  },
  socketId: {
    type: String,
  }
});

userSchema.methods.generateAuthToken = function () {
  const token = jsonwebtoken.sign({ _id: this._id }, process.env.JWT_SECRET, {
    expiresIn: "24h"
  });
  return token;
}

userSchema.methods.comparePassword = async function (password) {
  return await bcrypt.compare(password, this.password);
}

userSchema.statics.hashPassword = async function (password) {
  return await bcrypt.hash(password, 10);
}

const userModel = mongoose.model("user", userSchema);

export default userModel;