import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import cors from 'cors';
const app = express();

import connection from './db/db.js';
connection()

app.use(cors());

app.get('/', (req, res) => {
    res.send('Backend Working');
})

export default app;