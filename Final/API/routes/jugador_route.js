'use strict'

var jugador_controller = require('../controller/jugador_controller'),
    express = require('express'),
    router = express.Router()

    router
        .get('/jugador',verify,jugador_controller.get_all)
        .get('/jugador/I/M',verify,jugador_controller.get_all_IM)
        .get('/jugador/I/F',verify,jugador_controller.get_all_IF)
        .get('/jugador/D/F',verify,jugador_controller.get_all_DF)
        .get('/jugador/D/M',verify,jugador_controller.get_all_DM)
        .get('/jugador/premio',verify,jugador_controller.get_all_trophy)
        .post('/jugador',verify,jugador_controller.insert_new)
        .put('/jugador',verify,jugador_controller.update_by_id)
        .put('/jugador/pareja',verify,jugador_controller.update_partner_by_id)

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