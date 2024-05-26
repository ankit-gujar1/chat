import express from "express";
import { getMessages, sendMessage } from "../controllers/messageController.js";
import { protectRoutes } from "../middlewares/protectRoutes.js";

const router = express.Router();

router.post("/send/:id", protectRoutes, sendMessage);
router.get("/:id", protectRoutes, getMessages);

export default router;