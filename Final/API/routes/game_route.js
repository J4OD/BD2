'use strict'

var game_controller = require('../controller/game_controller'),
    express = require('express'),
    router = express.Router()

    router  
        .get('/game',verify,game_controller.get_all)
        .get('/game/:partido_id',verify,game_controller.get_all_by_partido)
        .post('/game',verify,game_controller.post_game)


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