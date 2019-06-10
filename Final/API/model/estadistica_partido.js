var db = require('./db_connection'),
    estadistica_partido = { //CRUD
        /* GETTERS */
        get_all:function(){
            db.query("SELECT * FROM estadistica_partido");
        },
        post_estadistica:function(id_jugador,id_partido){
            db.query("INSERT INTO estadistica_partido(id_jugador,id_partido) VALUES($1,$2)",[id_jugador,id_partido]);
        },
        update_estadistica:function(estadistica){
            db.query("UPDATE estadistica_partido SET rating_servicio = $1 , ases = $2 , doble_faltas = $3 , primeros_servicios = $4 , segundos_servicios = $5 , ptos_prim_serv = $6 , ptos_seg_serv = $7 , pb_salvados = $8 , games_servicio = $9 , ptos_prim_regr = $10 , ptos_seg_regr = $11 , pb_convertidos = $12 , games_regreso = $13, pto_serv = $14 , ptos_regr = $15 , tot_ptos = $16 WHERE id_jugador = $17 AND id_partido = $18",[estadistica.rating_servicio , estadistica.ases , estadistica.doble_faltas , estadistica.primeros_servicios , estadistica.segundos_servicios , estadistica.ptos_prim_serv , estadistica.ptos_seg_serv , estadistica.pb_salvados , estadistica.games_servicio , estadistica.ptos_prim_regr , estadistica.ptos_seg_regr , estadistica.pb_convertidos , estadistica.games_regreso, estadistica.pto_serv , estadistica.ptos_regr , estadistica.tot_ptos, estadistica.id_jugador,estadistica.id_partido]);
        }
    };
module.exports = estadistica_partido;