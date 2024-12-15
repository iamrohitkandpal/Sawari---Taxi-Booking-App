import userModel from "../models/user.model.js";
import bcrypt from "bcrypt";
import jsonwebtoken from "jsonwebtoken";
import blacklistTokenModel from "../models/blacklistToken.model.js";
import captainModel from "../models/captain.model.js";

export const authUser = async (req, res, next) => {
  const token = req.cookies.token || req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  const isTokenBlacklisted = await blacklistTokenModel.findOne({
    token: token,
  });

  if (isTokenBlacklisted) {
    res.status(401).json({ message: "Unauthorized" });
  }

  try {
    const decoded = jsonwebtoken.verify(token, process.env.JWT_SECRET);
    const user = await userModel.findById(decoded._id);

    req.user = user;

    return next();
  } catch (error) {
    return res.status(401).json({ message: "Unauthorized" });
  }
};

export const authCaptain = async (req, res, next) => {
  const token = req.cookies.token || req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  const isBlacklisted = await blacklistTokenModel.findOne({ token: token });

  if (isBlacklisted) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  try {
    const decoded = jsonwebtoken.verify(token, process.env.JWT_SECRET);

    if (!decoded._id) {
      return res.status(401).json({ message: "Token does not contain valid _id" });
    }

    const captain = await captainModel.findOne({ _id: decoded._id });

    req.captain = captain;
    next();
  } catch (error) {
    console.log(error);
    res.status(401).json({ message: "Unauthorized" });
  }
};
