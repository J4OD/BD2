'use strict'

var jwt = require('jsonwebtoken'),
    secret = require('../model/secret'),
    jugador_payload = require('../model/jugador_payload'),
    guest_payload = require('../model/guest_payload'),
    admin_payload = require('../model/admin_payload'),
    jurado_payload = require('../model/jurado_payload'),
    jurado_game_model = require('../model/jurado_game'),

    jurado_game_controller = ()=>{}

    jurado_game_controller.get_all = (req,res,next)=>{
        jwt.verify(req.token,secret.secret,(err,payload)=>{
            if(err){
                res.json(403,{
                    error: 1,
                    msg: 'FORBIDDEN'
                })
            } else if((payload.pass == jugador_payload.pass && payload.rol == jugador_payload.rol) || (payload.pass == guest_payload.pass && payload.rol == guest_payload.rol)||(payload.pass == admin_payload.pass && payload.rol == admin_payload.rol)||(payload.pass == jurado_payload.pass && payload.rol == jurado_payload.rol)){
                jurado_game_model.get_all()
                    .then(data=>{
                        //console.log(data)
                        res.json(data)
                    })
                    .catch(err=>{
                        res.json(500,{
                            msg: err
                        })
                    })
            } else{
                res.json(401,{
                    error: 1,
                    msg: 'No Autorizado'
                })
            }
        })
    }
    /* POST  */
    jurado_game_controller.post_jurado_by_partido =(req,res,next)=>{
        jwt.verify(req.token,secret.secret,(err,payload)=>{
            if(err){
                res.json(403,{
                    error: 1,
                    msg: 'FORBIDDEN'
                })
            } else if(payload.pass == admin_payload.pass && payload.rol == admin_payload.rol){
                let jurado_id = req.body.jurado_id,
                    partido_id = req.body.partido_id
                jurado_game_model.post_jurado_game_by_partido_id(jurado_id,partido_id)
                    .then(data=>{
                        //console.log(data)
                        res.json(data)
                    })
                    .catch(err=>{
                        res.json(500,{
                            msg: err
                        })
                    })
            } else{
                res.json(401,{
                    error: 1,
                    msg: 'No Autorizado'
                })
            }
        })
    }

    

module.exports = jurado_game_controller