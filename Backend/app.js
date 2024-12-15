import dotenv from 'dotenv';
import express, { urlencoded } from 'express';
import cors from 'cors';
import connection from './db/db.js';
import userRoutes from "./routes/user.routes.js";
import captainRoutes from "./routes/captain.routes.js";
import cookieParser from 'cookie-parser';

const app = express();
dotenv.config();
connection();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.get('/', (req, res) => {
    res.send('Backend Working');
});

app.use("/users", userRoutes);
app.use("/captains", captainRoutes);

export default app;