import "dotenv/config";
import { config } from "./config.js";
import express from "express";
import { registerAllModuleRoutes } from "./routes.js";

const app = express();
app.use(express.json({ limit: "20mb" }));

registerAllModuleRoutes(app);

app.listen(config.app.port, () => {
  console.log(`App working on port: ${config.app.port}`);
});
