import express from 'express';
import { body } from "express-validator"
import { loginUser, registerUser, getUserProfile, logOutUser } from './../controllers/user.controller.js';
import { authUser } from '../middlewares/auth.middleware.js';
const router = express.Router();




export default router;