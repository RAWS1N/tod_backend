import express from 'express'
import { getAllUser,CreateUser,getUserById, loginUser, getMyProfile, logoutUser } from "../controllers/user.js";
import { isAuthanticated } from '../middlewares/auth.js';

const router = express.Router()

router.get("/all",getAllUser)
router.post('/create',CreateUser)
router.post('/login',loginUser)
router.get("/me",isAuthanticated,getMyProfile)
router.get("/logout",isAuthanticated,logoutUser)
router.get("/:id",getUserById)


export default router

