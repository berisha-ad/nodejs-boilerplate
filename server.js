import express from "express";
import dotenv from "dotenv";
import errorHandler from "./middleware/errorMiddleware.js";

// import routes
import user from "./routes/user.js";

dotenv.config();

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/user", user);

// custom error handler
app.use(errorHandler);

app.listen(
  PORT,
  console.log(`Runs in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
