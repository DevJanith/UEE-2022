import express from "express";

import {
  createEvent,
  getEvent,
  deleteEvent,
  getAllEvents,
  getUserEvents,
  updateEvent,
} from "../controllers/event.controller.js";

const router = express.Router();

router.get("/", getAllEvents);
router.post("/", createEvent);
router.get("/:id", getEvent);
router.delete("/:id", deleteEvent);
router.put("/:id", updateEvent);
router.get("/user/:id", getUserEvents);

export default router;
