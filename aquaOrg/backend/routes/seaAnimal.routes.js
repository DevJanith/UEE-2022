import express from "express";

import { 
    createSeaAnimal,
    getSeaAnimal,
    getAllSeaAnimals,
    updateSeaAnimal,
    deleteSeaAnimal,
} from "../controllers/seaAnimal.controller.js";

const router = express.Router();

router.post("/", createSeaAnimal);
router.get("/", getAllSeaAnimals);
router.get("/:id", getSeaAnimal);
router.delete("/:id", deleteSeaAnimal);
router.put("/:id", updateSeaAnimal);

export default router;