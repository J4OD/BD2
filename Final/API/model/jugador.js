var db = require('./db_connection'),
    jugador = { //CRUD
        /* READ */
        get_all:function(){
            return db.query("SELECT * FROM jugador ORDER BY rank");
        },
        get_all_IM:function(){
            return db.query("SELECT * FROM jugador WHERE sexo = 'M' AND id_compañero IS NULL ORDER BY rank");
        },
        get_all_IF:function(){
            return db.query("SELECT * FROM jugador WHERE sexo = 'F' AND id_compañero IS NULL ORDER BY rank");
        },
        get_all_DF:function(){
            return db.query("SELECT * FROM jugador WHERE sexo = 'F' AND id_compañero IS NOT NULL ORDER BY rank");
        },
        get_all_DM:function(){
            return db.query("SELECT * FROM jugador WHERE sexo = 'M' AND id_compañero IS NOT NULL ORDER BY rank");
        },
        get_all_premio:function(){
            return db.query("SELECT * FROM jugador ORDER BY premio");
        },
        /* CREATE */
        post_jugador:function(jugador){
            return db.query("INSERT INTO jugador(nombre,rank,premio,id_compañero) VALUES ($1,$2,0,null)",[jugador.nombre,jugador.rank]);
        },
        /* UPDATE jugador */
        put_jugador:function(jugador){
            return db.query("UPDATE jugador SET sexo = $1,lugar_residencia=$2,lugar_nacimiento=$3,prof_desde=$4,edad=$5,peso=$5,altura=$6,tipo_mano=$7,tipo_reves=$8 WHERE id = $9",[jugador.sexo,jugador.lugar_residencia,jugador.lugar_nacimiento,jugador.profesional_desde,jugador.edad,jugador.peso,jugador.altura,jugador.tipo_mano,jugador.tipo_reves,jugador.id]);
        },
        /* UPDATE compañero */
        put_compañero:function(jugador_id,partner_id){
            return db.query("UPDATE jugador SET id_compañero=$1 WHERE id = $2",[partner_id,jugador_id]);
        }
    };

module.exports = jugador;