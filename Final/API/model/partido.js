var db = require('./db_connection'),
    partido = { //CRUD
        get_all:function(){
            return db.query("SELECT * FROM partido");
        },
        get_all_by_tipo:function(tipo){
            return db.query("SELECT * FROM partido WHERE tipo=$1",[tipo]);
        },
        get_all_by_tipo_clase:function(tipo,clase){
            return db.query("SELECT * FROM partido WHERE tipo=$1 AND clase=$2",[tipo,clase]);
        },
        get_all_by_tipo_clase_ronda:function(tipo,clase,ronda){
            return db.query("SELECT * FROM partido WHERE tipo=$1 AND clase=$2 AND ronda=$3",[tipo,clase,ronda]);
        }
    };

module.exports = partido;