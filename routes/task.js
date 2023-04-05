import express from 'express'
import { CreateTask, deleteTask, getAllTask, getMyTask, updateTask } from '../controllers/task.js'
import { isAuthanticated } from '../middlewares/auth.js'

const router =  express.Router()

router.get("/all",getAllTask)
router.post('/create',isAuthanticated,CreateTask)
router.get("/mytask",isAuthanticated,getMyTask)
router.route("/:id").put(isAuthanticated,updateTask).delete(isAuthanticated,deleteTask)



export default router