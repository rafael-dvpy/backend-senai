import { Router } from "express"
import { createNewCampo, getAllCampos, getCampoById } from "../services/campoServices.js"

const campoController = Router()

campoController.get("/", getAllCampos)

campoController.get("/:id", getCampoById)

campoController.post("/", createNewCampo)

export default campoController