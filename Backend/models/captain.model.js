import mongoose from "mongoose";
import bcrypt from 'bcrypt';
import jsonwebtoken from 'jsonwebtoken';

const captainSchema = new mongoose.Schema({
  fullname: {
    firstname: {
      type: String,
      required: true,
      minlength: [3, "First Name must be at least 3 characters long"],
    },
    lastname: {
      type: String,
      minlength: [3, "Last Name must be at least 3 characters long"],
    },
  },
  email: {
    type: String,
    unique: true,
    required: true,
    lowercase: true,
    match: [/^|S+@|S+|.|S+$/, "Please enter a valid email address"],
  },
  password: {
    type: String,
    required: true,
    select: false,
  },
  socketId: {
    type: String,
  },
  status: {
    type: String,
    enum: ["active", "inactive"],
    default: "inactive",
  },
  vehicle: {
    color: {
      type: String,
      required: true,
      minlength: [3, "Color must be at least 3 characters long"],
    },
    plate: {
      type: String,
      required: true,
      minlength: [3, "Plate must be at least 3 characters long"],
    },
    capacity: {
      type: Number,
      required: true,
      min: [1, "Capacity must be at least 1"],
    },
    vehicleType: {
      type: String,
      enum: ["car", "motorcycle", "auto"],
      required: true,
    },
  },
  location: {
    lat: {
        type: Number,
    },
    long: {
        type: Number,
    }
  }
});

captainSchema.methods.generateAuthToken = function () {
  const token = jsonwebtoken.sign({ _id: this._id }, process.env.JWT_SECRET, {
    expiresIn: "24h"
  });
  return token;
}

captainSchema.methods.comparePassword = async function (password) {
  return await bcrypt.compare(password, this.password);
}

captainSchema.statics.hashPassword = async function (password) {
  return await bcrypt.hash(password, 10);
}

const captainModel = mongoose.model("Captain", captainSchema);

export default captainModel;

