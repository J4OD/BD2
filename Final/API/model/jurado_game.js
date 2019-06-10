var db = require('./db_connection'),
    jurado_game = { //CRUD
        /* GETTERS */
        get_all:function(){
            return db.query("SELECT j_g.id_jurado,j.nombre,j.tipo_juez,g.id_partido,g.puntaje,g.set1,g.set2,g.set3,g.set4,g.set5,g.tb1,g.tb2,g.tb3,g.tb4,g.tb5,g.duracion FROM jurado_game AS j_g INNER JOIN jurado AS j ON j.id = j_g.id_jurado INNER JOIN game AS g ON g.id = j_g.id_game");
        },
        /* CREATE */
        post_jurado_game:function(jurado_id,game_id){
            return db.query("INSERT INTO jurado_game(id_jurado,id_game) VALUES ($1,$2)",[jurado_id,game_id]);
        },
        post_jurado_game_by_partido_id:function(jurado_id,partido_id){
            return db.query("INSERT INTO jurado_game(id_jurado,id_game) VALUES ($1,(SELECT id FROM game WHERE id_partido = $2))",[jurado_id,partido_id]);
        }
    };

module.exports = jurado_game;