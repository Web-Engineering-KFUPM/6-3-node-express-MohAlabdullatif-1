import express from "express";
const app = express();

const PORT = 3000;

import cors from "cors";
app.use(cors());

import morgan from "morgan";
app.use(morgan("dev"));

import { getRandomQuote } from "./quotes.js";

app.get("/", (req, res) => {
  res.send("Quote API is running");
});

app.get("/api/quote", (req, res) => {
  const quote = getRandomQuote();
  res.json({ quote });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});