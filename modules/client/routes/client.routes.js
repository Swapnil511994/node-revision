import express from "express";
import asyncHandler from "express-async-handler";
import {
  addNewClient,
  deleteExistingClient,
} from "../controllers/client.controller.js";

const router = express.Router({ mergeParams: true });

router.delete("/:client_id", asyncHandler(deleteExistingClient));

router.post("/", asyncHandler(addNewClient));

export default router;
