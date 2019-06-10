'use strict'

var jurado_controller = require('../controller/jurado_controller'),
    express = require('express'),
    router = express.Router()

    router
		.get('/jurado',verify,jurado_controller.get_all)
		.get('/jurado/:jurado_id',verify,jurado_controller.get_by_id)
		.get('/jurado/nombre/:name',verify,jurado_controller.get_by_name)
		.get('/jurado/pais/:country',verify,jurado_controller.get_by_country)
		.get('/jurado/tipo/:tipo',verify,jurado_controller.get_by_tipo)
		.post('/jurado',verify,jurado_controller.insert_new)
		.put('/jurado',verify,jurado_controller.update_by_id)
		.delete('/jurado/:jurado_id',verify,jurado_controller.delete)

    //Verificador de header
function verify(req,res,next){
	let bearer_header = req.headers['authorization'],
		bearer,
		bearer_token
	// Revisa si es no definido
	if(typeof bearer_header != 'undefined'){
		//separa el bearer
		bearer = bearer_header.split(' ')
		// obtiene el token
		bearer_token = bearer[1]
		//lo almacena
		req.token = bearer_token
		//console.log(req.token)
		//continua
		next()
	}else{
		res.json(403,{
			error: 1,
			msg: 'FORBIDDEN'
		})
	}
}

module.exports = router