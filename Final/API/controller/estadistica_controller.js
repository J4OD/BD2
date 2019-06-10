'use strict'

var jwt = require('jsonwebtoken'),
    secret = require('../model/secret'),
    jugador_payload = require('../model/jugador_payload'),
    guest_payload = require('../model/guest_payload'),
    admin_payload = require('../model/admin_payload'),
    jurado_payload = require('../model/jurado_payload'),
    estadistica_model = require('../model/estadistica_partido'),

    estadistica_controller = ()=>{}

    estadistica_controller.get_all = (req,res,next)=>{
        jwt.verify(req.token,secret.secret,(err,payload)=>{
            if(err){
                res.json(403,{
                    error: 1,
                    msg: 'FORBIDDEN'
                })
            } else if((payload.pass == jugador_payload.pass && payload.rol == jugador_payload.rol) || (payload.pass == guest_payload.pass && payload.rol == guest_payload.rol)||(payload.pass == admin_payload.pass && payload.rol == admin_payload.rol)||(payload.pass == jurado_payload.pass && payload.rol == jurado_payload.rol)){
                estadistica_model.get_all()
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
    estadistica_controller.post_jugador_by_partido =(req,res,next)=>{
        jwt.verify(req.token,secret.secret,(err,payload)=>{
            if(err){
                res.json(403,{
                    error: 1,
                    msg: 'FORBIDDEN'
                })
            } else if(payload.pass == admin_payload.pass && payload.rol == admin_payload.rol){
                let id_jugador = req.body.id_jugador,
                    id_partido = req.body.id_partido
                estadistica_model.post_estadistica(id_jugador,id_partido)
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
    estadistica_controller.put_estadisticas = (req,res,next)=>{
        wt.verify(req.token,secret.secret,(err,payload)=>{
            if(err){
                res.json(403,{
                    error: 1,
                    msg: 'FORBIDDEN'
                })
            } else if(payload.pass == admin_payload.pass && payload.rol == admin_payload.rol){
                let estadistica = {
                    id_jugador : req.body.id_jugador,
                    id_partido : req.body.id_partido,
                    rating_servicio : req.body.rat_serv,
                    ases : req.body.ases, 
                    doble_faltas : req.body.dbl_faltas,
                    primeros_servicios : req.body.prim_serv,
                    segundos_servicios : req.body.seg_serv,
                    ptos_prim_serv : req.body.ptos_prim_serv,
                    ptos_seg_serv : req.body.ptos_seg_serv, 
                    pb_salvados : req.body.pb_salvados,
                    games_servicio : req.body.games_servicio,
                    ptos_prim_regr : req.body.ptos_prim_regr,
                    ptos_seg_regr : req.body.ptos_seg_regr,
                    pb_convertidos : req.body.pb_convertidos,
                    games_regreso : req.body.games_regreso,
                    pto_serv : req.body.pto_serv,
                    ptos_regr : req.body.ptos_regr,
                    tot_ptos : req.body.tot_ptos
                }
                estadistica_model.update_estadistica(estadistica)
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

module.exports = estadistica_controller