import express from "express"
import isAuth from "../middlewares/isAuth.js"
import { getCurrentUser,getPortfolio} from "../controllers/user.controller.js"



const userRouter = express.Router()

userRouter.get("/current-user",isAuth,getCurrentUser)
userRouter.get("/portfolio",isAuth,getPortfolio)

export default userRouter