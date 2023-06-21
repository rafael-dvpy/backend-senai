import { Router } from "express"
import userController from "./userController/user.controller.js"
import camposController from "./camposController/campos.controller.js"

const controller = Router()

controller.use("/usuario", userController)

controller.use("/campos", camposController)

export default controller