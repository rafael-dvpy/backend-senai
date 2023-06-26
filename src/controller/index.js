import { Router } from "express"
import playerController from "./playerController"
import campoController from "./campoController"

const controller = Router()

controller.use("/player", playerController)

controller.use("/campo", campoController)

export default controller