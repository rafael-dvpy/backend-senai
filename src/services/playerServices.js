
import { PlayerModal } from "../models/playerModel.js"

export const getAllPlayers = async (req, res) => {
    const players = await PlayerModal.find()

    res.send(players)
}

export const getPlayerById = async (req, res) => {
    const id = req.params.id
    const player = await PlayerModal.findById(id)
    res.send(player)
}

export const createPlayer = async (req, res) => {
    const playerData = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        campos: [],
        createdAt: new Date().toUTCString(),
    }

    const newPlayer = new PlayerModal(playerData)

    await newPlayer.save()

    res.send(playerData)

}

export const updatePlayerById = (req, res) => {
    const playerData = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        campos: req.body.campos,
    }

    const id = req.params.id

    PlayerModal.findByIdAndUpdate(id, playerData)

    res.send(playerData)
}

export const deletePlayerById = (req, res) => {

    const id = req.body.id

    PlayerModal.findByIdAndDelete(id)

    res.send("player foi de americanas")
}

