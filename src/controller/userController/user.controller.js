import { Router } from "express"
import { createUser, getAllUsers, getUserById } from "../../services/users.services.js"


const userController = Router()

userController.get("/", async (req, res) => {
	res.send(getAllUsers())
})

userController.get("/:id", (req, res) => {
	const parametros = {
		id: req.params.id,
	}
	
	const user = getUserById(parametros.id)

	res.send(user)
})

userController.post("/", createUser)

export default userController