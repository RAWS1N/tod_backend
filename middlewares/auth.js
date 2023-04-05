import jwt from 'jsonwebtoken'
import User from '../models/user.js'


export const isAuthanticated = async(req,res,next) => {
    const {token} = req.cookies
    if(!token){
        res.status(404).json({
            success : false,
            message : 'Please Login First'
        })
    }
    const decoded = await jwt.verify(token,process.env.JWT_SECRET)
    const user = await User.findById(decoded._id)
    req.user = user
    next()
    

}