import express from "express";
import { config } from "dotenv";
import mongoose from "mongoose";
import { router as bookRoutes } from "./routes/book.routes.js";
import bodyParser from "body-parser";

config();

const app = express();
app.use(bodyParser.json());

//Conectamos la BD

mongoose.connect(process.env.MONGO_URL, { dbName: process.env.MONGO_DB_NAME });
const db = mongoose.connection;

app.use("/books", bookRoutes);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
