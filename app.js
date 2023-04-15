import express, { urlencoded } from 'express'
import { config } from 'dotenv'
import userRouter from './routes/user.js'
import cookieParser from 'cookie-parser'
import taskRouter from './routes/task.js'
import { errorMiddleware } from './middlewares/error.js'
import cors from 'cors'

config({
    path : './config.env'
})


const app = express()
// app.use(cors())
app.use(
  cors({
    origin: [process.env.FRONTEND_URL],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);
app.use(express.json())
app.use(cookieParser())
app.get("/",(req,res) => {
    res.send("Welcome to todo_backend")
})
app.use("/api/v1/user",userRouter)
app.use('/api/v1/task',taskRouter)
app.use(urlencoded({extended:true}))
app.use(errorMiddleware)




export {app}
