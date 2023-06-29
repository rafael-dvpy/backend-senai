import { Router } from "express"
import { getAllPlayers, getPlayerById, createPlayer, updatePlayerById, deletePlayerById} from "../services/playerServices.js"


const playerController = Router()

playerController.get("/", getAllPlayers)

playerController.get("/:id", getPlayerById)

playerController.get("/", createPlayer)

playerController.get("/", updatePlayerById)



playerController.delete("/:id", deletePlayerById)

playerController.put("/:id", updatePlayerById)

export default playerController