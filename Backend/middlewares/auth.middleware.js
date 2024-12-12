import userModel from "../models/user.model";
import { bcrypt } from "bcrypt";
import { jsonwebtoken } from "jsonwebtoken";

export const authUser = async (req, res, next) => {
  const token = req.cookies.token || req.headers.authorization.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  const isTokenBlacklisted = await blacklistTokenModel.findOne({ token: token });

  try {
    const decoded = jsonwebtoken.verify(token, process.env.JWT_SECRET);
    const user = await userModel.findById(decoded._id);

    req.user = user;

    return next();
  } catch (error) {
    return res.status(401).json({ message: "Unauthorized" });
  }
};
