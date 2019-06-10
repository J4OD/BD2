var db = require('./db_connection'),
    game = { //CRUD
        //READ
        get_all:function(){
            return db.query("SELECT * FROM game");
        },
        get_all_by_partido:function(partido_id){
            return db.query("SELECT * FROM game WHERE id_partido=$1",[partido_id]);
        },
        get_id_by_partido_tipo_clase:function(tipo_clase){
            tipo_clase = '%'+tipo_clase+'%';
            return db.query("SELECT id FROM game WHERE id_partido LIKE ($1)",[tipo_clase]);
        },
        //UPDATE
        put_all:function(game){
            return db.query("UPDATE game SET puntaje=$1,set1=$2,set2=$3,set3=$4,set4=$5,set5=$6,tb1=$7,tb2=$8,tb3=$9,tb4=$10,tb5=$11,duracion=$12 WHERE id_partido=$13",[game.puntaje,game.set1,game.set2,game.set3,game.set4,game.set5,game.tb1,game.tb2,game.tb3,game.tb4,game.tb5,game.duracion,game.id_partido]);
        }
    };

module.exports = game;