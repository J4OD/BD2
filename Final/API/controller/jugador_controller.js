'use strict'

var jwt = require('jsonwebtoken'),
    secret = require('../model/secret'),
    jugador_payload = require('../model/jugador_payload'),
    guest_payload = require('../model/guest_payload'),
    admin_payload = require('../model/admin_payload'),
    jurado_payload = require('../model/jurado_payload'),
    jugador_model = require('../model/jugador'),
    jugador_controller = () =>{}

    /* GETTERS */
    jugador_controller.get_all = (req,res,next)=>{
        jwt.verify(req.token,secret.secret,(err,payload)=>{
            if(err){
                res.json(403,{
                    error: 1,
                    msg: 'FORBIDDEN'
                })
            } else if((payload.pass == jugador_payload.pass && payload.rol == jugador_payload.rol) || (payload.pass == guest_payload.pass && payload.rol == guest_payload.rol)||(payload.pass == admin_payload.pass && payload.rol == admin_payload.rol)||(payload.pass == jurado_payload.pass && payload.rol == jurado_payload.rol)){
                jugador_model.get_all()
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
    jugador_controller.get_all_IM = (req,res,next)=>{
        jwt.verify(req.token,secret.secret,(err,payload)=>{
            if(err){
                res.json(403,{
                    error: 1,
                    msg: 'FORBIDDEN'
                })
            } else if((payload.pass == jugador_payload.pass && payload.rol == jugador_payload.rol) || (payload.pass == guest_payload.pass && payload.rol == guest_payload.rol)||(payload.pass == admin_payload.pass && payload.rol == admin_payload.rol)||(payload.pass == jurado_payload.pass && payload.rol == jurado_payload.rol)){
                jugador_model.get_all_IM()
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
    jugador_controller.get_all_IF = (req,res,next)=>{
        jwt.verify(req.token,secret.secret,(err,payload)=>{
            if(err){
                res.json(403,{
                    error: 1,
                    msg: 'FORBIDDEN'
                })
            } else if((payload.pass == jugador_payload.pass && payload.rol == jugador_payload.rol) || (payload.pass == guest_payload.pass && payload.rol == guest_payload.rol)||(payload.pass == admin_payload.pass && payload.rol == admin_payload.rol)||(payload.pass == jurado_payload.pass && payload.rol == jurado_payload.rol)){
                jugador_model.get_all_IF()
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
    jugador_controller.get_all_DF = (req,res,next)=>{
        jwt.verify(req.token,secret.secret,(err,payload)=>{
            if(err){
                res.json(403,{
                    error: 1,
                    msg: 'FORBIDDEN'
                })
            } else if((payload.pass == jugador_payload.pass && payload.rol == jugador_payload.rol) || (payload.pass == guest_payload.pass && payload.rol == guest_payload.rol)||(payload.pass == admin_payload.pass && payload.rol == admin_payload.rol)||(payload.pass == jurado_payload.pass && payload.rol == jurado_payload.rol)){
                jugador_model.get_all_DF()
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
    jugador_controller.get_all_DM = (req,res,next)=>{
        jwt.verify(req.token,secret.secret,(err,payload)=>{
            if(err){
                res.json(403,{
                    error: 1,
                    msg: 'FORBIDDEN'
                })
            } else if((payload.pass == jugador_payload.pass && payload.rol == jugador_payload.rol) || (payload.pass == guest_payload.pass && payload.rol == guest_payload.rol)||(payload.pass == admin_payload.pass && payload.rol == admin_payload.rol)||(payload.pass == jurado_payload.pass && payload.rol == jurado_payload.rol)){
                jugador_model.get_all_DM()
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
    jugador_controller.get_all_trophy = (req,res,next)=>{
        jwt.verify(req.token,secret.secret,(err,payload)=>{
            if(err){
                res.json(403,{
                    error: 1,
                    msg: 'FORBIDDEN'
                })
            } else if((payload.pass == jugador_payload.pass && payload.rol == jugador_payload.rol) || (payload.pass == guest_payload.pass && payload.rol == guest_payload.rol)||(payload.pass == admin_payload.pass && payload.rol == admin_payload.rol)||(payload.pass == jurado_payload.pass && payload.rol == jurado_payload.rol)){
                jugador_model.get_all_trophy()
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
    /* CREATE */
    jugador_controller.insert_new = (req,res,next)=>{
        jwt.verify(req.token,secret.secret,(err,payload)=>{
            if(err){
                res.json(403,{
                    error: 1,
                    msg: 'FORBIDDEN'
                })
            } else if(payload.pass == admin_payload.pass && payload.rol == admin_payload.rol){
                let jugador = {
                    nombre : req.body.nombre,
                    rank : req.body.rank
                }
                jugador_model.post_jugador(jugador)
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
    /* UPDATE */
    jugador_controller.update_by_id = (req,res,next)=>{
        jwt.verify(req.token,secret.secret,(err,payload)=>{
            if(err){
                res.json(403,{
                    error: 1,
                    msg: 'FORBIDDEN'
                })
            } else if(payload.pass == admin_payload.pass && payload.rol == admin_payload.rol){
                let jugador = {
                    id : req.body.id,
                    sexo : req.body.sexo,
                    lugar_residencia : req.body.lugar_residencia,
                    lugar_nacimiento : req.body.lugar_nacimiento,
                    profesional_desde : req.body.profesional_desde,
                    edad : req.body.edad,
                    peso : req.body.peso,
                    altura : req.body.altura,
                    tipo_mano : req.body.tipo_mano,
                    tipo_reves : req.body.tipo_reves
                }
                jugador_model.put_jugador(jugador)
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
    jugador_controller.update_partner_by_id= (req,res,next)=>{
        jwt.verify(req.token,secret.secret,(err,payload)=>{
            if(err){
                res.json(403,{
                    error: 1,
                    msg: 'FORBIDDEN'
                })
            } else if(payload.pass == admin_payload.pass && payload.rol == admin_payload.rol){
                let jugador_id = req.body.jugador_id,
                    partner_id = req.body.partner_id
                jugador_model.put_compañero(jugador_id,partner_id)
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

module.exports = jugador_controller