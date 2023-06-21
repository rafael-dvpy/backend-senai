import users from "./../data/users.json" assert {type: "json"}
import { User } from "./../models/user.model.js"

const getAllUsers = () => {
    return users
}

const getUserById = (userId) => {

for(let i = 0; i < users.length + 1; i++){
		if(users[i].id == userId){
			return(users[i])
		}
	}

}

const createUser = (req, res) => {
	const data = req.body

	const newUser = new User(
		data.id,
		data.name,
		data.email,
		data.password,
	)

	users.push(newUser)

	res.send(newUser)
}

const updateUserById = () => {}

const deleteUserById = () => {}

export {getAllUsers, getUserById, createUser, updateUserById, deleteUserById}