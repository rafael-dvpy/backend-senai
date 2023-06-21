import express from "express";
import bodyParser from "body-parser";
import controller from "./controller/index.js"

const app = express();

app.use(bodyParser.json());

app.listen(2000, () => {
	console.log("Server is running on port 2000");
});

app.use(controller)