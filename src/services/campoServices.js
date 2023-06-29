import { CampoModal } from "../models/campoModel.js"

export const getAllCampos = async (req, res) => {
    const campos = await CampoModal.find()
    res.send(campos)
}

export const getCampoById = async (req, res) => {
    const id = req.params.id
    const campo = await CampoModal.findById(id)
    res.send(campo)
}

export const createNewCampo = async (req, res) => {
    const campoData = {
        name: req.body.name,
        sports: req.body.sports,
        location: req.body.location,
        openingHours: req.body.openingHours,
        createdBy: req.body.createdBy,
        editedBy: req.body.editedBy,
        createdAt: new Date().toUTCString(),
        updatedAt: new Date().toUTCString(),
    }

    const newCampo = new CampoModal(campoData)

    await newCampo.save()

    res.send(campoData)
}

export const upadateCampoById = (req, res) => {
    const campoData = {
        name: req.body.name,
        sports: req.body.sports,
        location: req.body.location,
        openingHours: req.body.openingHours,
        createdBy: req.body.createdBy,
        editedBy: req.body.editedBy,
        updatedAt: new Date().toUTCString(),
    }

    const id = req.params.id

    CampoModal.findByIdAndUpdate(id, campoData)

    res.send(campoData)
}

export const deleteCampoById = (req, res) => {
    const id = req.body.id

    CampoModal.findByIdAndDelete(id)

    res.send("campo foi de F")
}