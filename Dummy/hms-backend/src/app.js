// src/app.js

import express from "express";
import cors from "cors";
import morgan from "morgan";

import routes from "./routes.js";
import { connectDB } from "./config/db.js";
import { errorHandler } from "./middlewares/error.middleware.js";
import requestLogger from "./middlewares/requestLogger.middleware.js";

const app = express();

/* ======================
   Database Connection
====================== */
connectDB();

/* ======================
   Global Middlewares
====================== */
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// HTTP request logging
app.use(morgan("dev"));
app.use(requestLogger);

/* ======================
   Health Check
====================== */
app.get("/health", (req, res) => {
  res.status(200).json({
    status: "OK",
    message: "HMS Backend is running 🚀",
    timestamp: new Date(),
  });
});

/* ======================
   API Routes
====================== */
app.use("/api", routes);

/* ======================
   Error Handler (LAST)
====================== */
app.use(errorHandler);

export default app;
