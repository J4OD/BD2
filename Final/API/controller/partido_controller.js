'use strict'

var jwt = require('jsonwebtoken'),
    secret = require('../model/secret'),
    jugador_payload = require('../model/jugador_payload'),
    guest_payload = require('../model/guest_payload'),
    admin_payload = require('../model/admin_payload'),
    jurado_payload = require('../model/jurado_payload'),
    partido_model = require('../model/partido'),
    partido_controller = ()=>{}

    partido_controller.get_all = (req,res,next)=>{
        jwt.verify(req.token,secret.secret,(err,payload)=>{
            if(err){
                res.json(403,{
                    error: 1,
                    msg: 'FORBIDDEN'
                })
            } else if((payload.pass == jugador_payload.pass && payload.rol == jugador_payload.rol) || (payload.pass == guest_payload.pass && payload.rol == guest_payload.rol)||(payload.pass == admin_payload.pass && payload.rol == admin_payload.rol)||(payload.pass == jurado_payload.pass && payload.rol == jurado_payload.rol)){
                partido_model.get_all()
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
    partido_controller.get_all_by_tipo = (req,res,next)=>{
        jwt.verify(req.token,secret.secret,(err,payload)=>{
            if(err){
                res.json(403,{
                    error: 1,
                    msg: 'FORBIDDEN'
                })
            } else if((payload.pass == jugador_payload.pass && payload.rol == jugador_payload.rol) || (payload.pass == guest_payload.pass && payload.rol == guest_payload.rol)||(payload.pass == admin_payload.pass && payload.rol == admin_payload.rol)||(payload.pass == jurado_payload.pass && payload.rol == jurado_payload.rol)){
                let tipo = req.params.tipo
                partido_model.get_all_by_tipo(tipo)
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
    partido_controller.get_all_by_tipo_clase = (req,res,next)=>{
        jwt.verify(req.token,secret.secret,(err,payload)=>{
            if(err){
                res.json(403,{
                    error: 1,
                    msg: 'FORBIDDEN'
                })
            } else if((payload.pass == jugador_payload.pass && payload.rol == jugador_payload.rol) || (payload.pass == guest_payload.pass && payload.rol == guest_payload.rol)||(payload.pass == admin_payload.pass && payload.rol == admin_payload.rol)||(payload.pass == jurado_payload.pass && payload.rol == jurado_payload.rol)){
                let tipo = req.params.tipo,
                    clase = req.params.clase
                partido_model.get_all_by_tipo_clase(tipo,clase)
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
    partido_controller.get_all_by_tipo_clase_ronda = (req,res,next)=>{
        jwt.verify(req.token,secret.secret,(err,payload)=>{
            if(err){
                res.json(403,{
                    error: 1,
                    msg: 'FORBIDDEN'
                })
            } else if((payload.pass == jugador_payload.pass && payload.rol == jugador_payload.rol) || (payload.pass == guest_payload.pass && payload.rol == guest_payload.rol)||(payload.pass == admin_payload.pass && payload.rol == admin_payload.rol)||(payload.pass == jurado_payload.pass && payload.rol == jurado_payload.rol)){
                let tipo = req.params.tipo,
                    clase = req.params.clase,
                    ronda = req.params.ronda
                partido_model.get_all_by_tipo_clase_ronda(tipo,clase,ronda)
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

module.exports = partido_controller;