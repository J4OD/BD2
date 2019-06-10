'use strict'

var jwt = require('jsonwebtoken'),
    secret = require('../model/secret'),
    jurado_payload = require('../model/jurado_payload'),
    admin_payload = require('../model/admin_payload'),
    jurado_model = require('../model/jurado'),
    jurado_controller = () =>{}

    //Getters
    jurado_controller.get_all = (req,res,next)=>{
        jwt.verify(req.token,secret.secret,(err,payload)=>{
            if(err){
                res.json(403,{
                    error: 1,
                    msg: 'FORBIDDEN'
                })
            } else if(payload.pass == jurado_payload.pass && payload.rol == jurado_payload.rol){
                jurado_model.get_all_jurado()
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
    jurado_controller.get_by_id = (req,res,next)=>{
        jwt.verify(req.token,secret.secret,(err,payload)=>{
            if(err){
                res.json(403,{
                    error: 1,
                    msg: 'FORBIDDEN'
                })
            } else if(payload.pass == jurado_payload.pass && payload.rol == jurado_payload.rol){
                let id = req.params.jurado_id
                jurado_model.get_jurado_by_id(id)
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
    jurado_controller.get_by_name = (req,res,next)=>{
        jwt.verify(req.token,secret.secret,(err,payload)=>{
            if(err){
                res.json(403,{
                    error: 1,
                    msg: 'FORBIDDEN'
                })
            } else if(payload.pass == jurado_payload.pass && payload.rol == jurado_payload.rol){
                let name = req.params.name
                jurado_model.get_jurado_by_name(name)
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
    jurado_controller.get_by_country = (req,res,next)=>{
        jwt.verify(req.token,secret.secret,(err,payload)=>{
            if(err){
                res.json(403,{
                    error: 1,
                    msg: 'FORBIDDEN'
                })
            } else if(payload.pass == jurado_payload.pass && payload.rol == jurado_payload.rol){
                let country = req.params.country
                jurado_model.get_jurado_by_country(country)
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
    jurado_controller.get_by_tipo = (req,res,next)=>{
        jwt.verify(req.token,secret.secret,(err,payload)=>{
            if(err){
                res.json(403,{
                    error: 1,
                    msg: 'FORBIDDEN'
                })
            } else if(payload.pass == jurado_payload.pass && payload.rol == jurado_payload.rol){
                let tipo = req.params.tipo
                jurado_model.get_jurado_by_tipo(tipo)
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
    //CREATE
    jurado_controller.insert_new = (req,res,next)=>{
        jwt.verify(req.token,secret.secret,(err,payload)=>{
            if(err){
                res.json(403,{
                    error: 1,
                    msg: 'FORBIDDEN'
                })
            } else if(payload.pass == admin_payload.pass && payload.rol == admin_payload.rol){
                let jurado = {
                    nombre : req.body.nombre,
                    pais : req.body.pais,
                    tipo_juez : req.body.tipo_juez
                }
                jurado_model.post_jurado(jurado)
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
    //UDPDATE
    jurado_controller.update_by_id = (req,res,next)=>{
        jwt.verify(req.token,secret.secret,(err,payload)=>{
            if(err){
                res.json(403,{
                    error: 1,
                    msg: 'FORBIDDEN'
                })
            } else if(payload.pass == admin_payload.pass && payload.rol == admin_payload.rol){
                let jurado = {
                    id : req.body.id,
                    nombre : req.body.nombre,
                    pais : req.body.pais,
                    tipo_juez : req.body.tipo_juez
                }
                jurado_model.put_jurado_by_id(jurado)
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
    //DELETE
    jurado_controller.delete = (req,res,next)=>{
        jwt.verify(req.token,secret.secret,(err,payload)=>{
            if(err){
                res.json(403,{
                    error: 1,
                    msg: 'FORBIDDEN'
                })
            } else if(payload.pass == admin_payload.pass && payload.rol == admin_payload.rol){
                let id = req.params.jurado_id
                jurado_model.delete_jurado_by_id(id)
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

    module.exports = jurado_controller