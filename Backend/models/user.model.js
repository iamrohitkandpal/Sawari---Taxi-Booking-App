import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jsonwebtoken from "jsonwebtoken";


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
    select: false,
    minLength: [8, "Password must be at least 8 characters long"],
  },
  socketId: {
    type: String,
  }
});

userSchema.methods.generateAuthToken = function (params) {
  const token = jsonwebtoken.sign({ _id: this._id }, process.env.JWT_SECRET);
  return token;
}

userSchema.methods.comparePassword = async function (password) {
  return await bcrypt.compare(password, this.password);
}

userSchema.static.hashPassword = async function (password) {
  return await bcrypt.hash(password, 10);
}

const userModel = mongoose.model("user", userSchema);

export default userModel;