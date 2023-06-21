import campos from "../data/campos.json" assert { type: 'json'}

export const getAllCampos = (req, res) => {
	res.send(campos)
}

export const getCampoById = (req, res) => {
	const parametros = {
		id: req.params.id,
	}
	
	for(let i = 0; i < campos.length + 1; i++){
		if(campos[i].id == parametros.id){
			res.send(campos[i])
			break;
		}
	}
}

export const createNewCampo = (req, res) => {
	const bodyData = req.body
	campos.push(bodyData)
	res.send(campos)
}