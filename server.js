import express from "express";
import dotenv from "dotenv";

import connectDB from "./config/db.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 8000;

//connect database
connectDB();

app.use(express.json());

app.get("/", (req, res, next) => {
    res.status(200).json({
        message: "Hello from Server"
    });
});

app.post("/data", (req, res, next) => {
    res.status(200).json({
        message: req.body
    });
});

app.listen(port, () => {
    console.log(`Server is running successfully on port ${port}.`);
});