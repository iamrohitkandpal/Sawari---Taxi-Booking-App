import { validationResult } from "express-validator";
import userModel from "../models/user.model.js";
import { createUser } from "../services/user.service.js";
import blacklistTokenModel from "../models/blacklistToken.model.js";

export const registerUser = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { fullname, email, password } = req.body;

  const isUserAlreadyThere = await userModel.findOne({ email });

  if (isUserAlreadyThere) {
    return res.status(400).json({ message: "User already exist" });
  }

  const hashPassword = await userModel.hashPassword(password);

  const user = await createUser({
    firstname: fullname.firstname,
    lastname: fullname.lastname,
    email,
    password: hashPassword,
  });

  const token = user.generateAuthToken();

  res.status(201).json({ token, user });
};

export const loginUser = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { email, password } = req.body;

  const user = await userModel.findOne({ email }).select("+password");

  if (!user) {
    return res.status(401).json({
      message: "Invalid Email or Password",
    });
  }

  const isMatch = await user.comparePassword(password);

  if (!isMatch) {
    return res.status(401).json({
      message: "Invalid Email or Password",
    });
  }

  const token = user.generateAuthToken();

  res.cookie("token", token);

  res.status(200).json({ token, user });
};

export const getUserProfile = async (req, res, next) => {
  res.status(200).json(req.user);
};

export const logOutUser = async (req, res, next) => {
  try {
    res.clearCookie('jwt');
    res.status(200).json({
      success: true,
      message: "Logged out successfully"
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error during logout",
      error: error.message
    });
  }
};
