import dotenv from 'dotenv';
import express, { urlencoded } from 'express';
import cors from 'cors';
import connection from './db/db.js';
import userRoutes from "./routes/user.routes.js";

const app = express();
dotenv.config();
connection();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('Backend Working');
});

app.use("/user", userRoutes);

export default app;