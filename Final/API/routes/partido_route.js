'use strict'

var partido_controller = require('../controller/partido_controller'),
    express = require('express'),
    router = express.Router()

    router
        .get('/partido',verify,partido_controller.get_all)
        .get('/partido/:tipo',verify,partido_controller.get_all_by_tipo)
        .get('/partido/:tipo/:clase',verify,partido_controller.get_all_by_tipo_clase)
        .get('/partido/:tipo/:clase/:ronda',verify,partido_controller.get_all_by_tipo_clase_ronda)


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