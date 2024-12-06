import userModel from "../models/user.model";
import { bcrypt } from 'bcrypt';
import { jsonwebtoken } from 'jsonwebtoken';

export const authUser = async (req, res, next) => {
    const token = req.cookies.token || req.headers.authorization.split(' ')[1];

    if(!token) {
        return res.status(401).json({ message: "Unauthorized" });
    }

    try {
        const decoded = jsonwebtoken.verify(token, process.env.JWT_SECRET);
    } catch (error) {
        retirn res.status(401).json({ message: "Unauthorized" });
    }
}