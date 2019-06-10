'use strict'

var estadistica_controller = require('../controller/estadistica_controller'),
    express = require('express'),
    router = express.Router()

    router
        .get('/estadistica',verify,estadistica_controller.get_all)
        .post('/estadistica',verify,estadistica_controller.post_jugador_by_partido)
        .put('/estadistica',verify,estadistica_controller.put_estadisticas)

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