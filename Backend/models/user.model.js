import mongoose from "mongoose";

const userSchema = new mongoose.SchemaTypes({
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
    minLength: [8, "Password must be at least 8 characters long"],
  }
});
