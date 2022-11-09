import express from "express"
import { login, getUser, register, resetPassword, updateUser } from "../controllers/users.controller.js"

const router = express.Router();

router.post(`/login`, login)
router.post(`/register`, register)
router.put(`/password-reset/:id`, resetPassword)

router.get(`/:id`, getUser)
router.put(`/:id`, updateUser)

export default router;