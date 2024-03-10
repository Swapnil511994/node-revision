import "dotenv/config";
import { config } from "./config.js";
import express from "express";

const app = express();

app.use("/", (req, res) => {
  res.json({ status: true, message: "HEllo World" });
});

app.listen(config.app.port, () => {
  console.log(`App working on port: ${config.app.port}`);
});
