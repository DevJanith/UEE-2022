import express from "express"
import { getAllQuestionAnswers, getQuestionAnswers, getQuestionAnswersAccordingToType } from "../controllers/questionAnswers,controller.js"

const router = express.Router();

router.get(`/`, getAllQuestionAnswers)
router.put(`/:id`, getQuestionAnswers)
router.put(`/:type`, getQuestionAnswersAccordingToType)

export default router;