import { Router } from "express"
import { getAllPlayers, getPlayerById, createPlayer} from "../services/playerServices.js"


const playerController = Router()

playerController.get("/", getAllPlayers)

playerController.get("/:id", getPlayerById)

playerController.post("/", createPlayer)

export default playerController