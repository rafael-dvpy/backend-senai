import { Router } from "express"
import playerController from "./playerController.js"
import campoController from "./campoController.js"

const controller = Router()

controller.use("/player", playerController)

controller.use("/campo", campoController)

export default controller