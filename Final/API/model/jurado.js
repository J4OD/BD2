var db = require('./db_connection');    //Referencia a conexión de  Base de Datos
var jurado ={                           //CRUD

    /* Getters Jurado */
    get_all_jurado:function(){
        return db.query("SELECT * FROM jurado");
    },
    get_jurado_by_id:function(id){
        return db.query("SELECT * FROM jurado WHERE id = $1",[id]);
    },
    get_jurado_by_name:function(name){
        return db.query("SELECT * FROM jurado WHERE nombre = $1",[name]);
    },
    get_jurado_by_country:function(country){
        return db.query("SELECT * FROM jurado WHERE pais = $1",[country]);
    },
    get_jurado_by_tipo:function(tipo){
        return db.query("SELECT * FROM jurado WHERE tipo_juez = $1",[tipo]);
    },
    /* CREATE Jurado */
    post_jurado:function(jurado){
        return db.query("INSERT INTO jurado(id,nombre,pais,tipo_juez) VALUES(DEFAULT,$1,$2,$3) RETURNING id",[jurado.nombre,jurado.pais,jurado.tipo_juez]);
    },
    /* UPDATE Jurado */
    put_jurado_by_id:function(jurado){
        return db.query("UPDATE jurado SET nombre = $1 , pais = $2 , tipo_juez = $3 WHERE id = $4",[jurado.nombre,jurado.pais,jurado.tipo_juez,jurado.id]);
    },
    /* DELETE Jurado */
    delete_jurado_by_id:function(id){
        return db.query("DELETE FROM jurado WHERE id = $1",[id]);
    }    
};
module.exports = jurado;