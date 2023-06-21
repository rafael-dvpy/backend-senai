import { Router } from "express"
import { createNewCampo, getAllCampos, getCampoById } from "../../services/campos.services.js"

const camposController = Router()

camposController.get("/", getAllCampos)

camposController.get("/:id", getCampoById)

camposController.post("/", createNewCampo)

export default camposController