'use strict'

var jurado_game_controller = require('../controller/jurado_game_controller'),
    express = require('express'),
    router = express.Router()

    router  
        .get('/jurado_game',verify,jurado_game_controller.get_all)
        .post('/jurado_game',verify,jurado_game_controller.post_jurado_by_partido)
        

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