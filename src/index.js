import express from "express";
import bodyParser from "body-parser";
import controller from "./controller/index.js";
import mongoose from "mongoose";

mongoose.connect('mongodb://127.0.0.1:27017/joga-ai');

const app = express();

app.use(bodyParser.json());

app.listen(2001, () => {
	console.log("Server is running on port 2001");
});

app.use(controller)