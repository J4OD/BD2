/* Crear Base de datos */

/* Jugador */
CREATE TABLE jugador(
    id                  SERIAL PRIMARY KEY NOT NULL,
    nombre              VARCHAR(250) NOT NULL,
    rank                INTEGER NOT NULL,
    sexo                VARCHAR(1) NOT NULL,
    lugar_residencia    VARCHAR(250),
    lugar_nacimiento    VARCHAR(250),
    prof_desde          INTEGER,
    edad                INTEGER,
    peso                REAL,  -- Kg
    altura              REAL,  -- cm
    tipo_mano           VARCHAR(1),
    tipo_reves          NUMERIC(1),
    premio              REAL,
    id_compañero        SERIAL,
    FOREIGN KEY (id_compañero) REFERENCES jugador(id)
);
/* partido
ronda : R%numero%
tipo  : I -> individual, D-> dobles
clase : M -> masculino, F -> femenino, X -> Mixto
 */
CREATE TABLE partido(
    id              VARCHAR(70) PRIMARY KEY NOT NULL,
    ronda           INTEGER     NOT NULL,
    tipo            VARCHAR(1)  NOT NULL,
    clase           VARCHAR(1)  NOT NULL,
    numero          INTEGER     NOT NULL 
);
/* Jurado
tipo_juez : 0 -> Juez de jueces
            1 -> Juez de Silla
            2 -> Juez de linea lateral
            3 -> Juez de Saque
            4 -> Juez de Red (opt)*/
CREATE TABLE jurado(
    id              SERIAL PRIMARY KEY NOT NULL,
    nombre          VARCHAR(250) NOT NULL,
    pais            VARCHAR(50)
    tipo_juez       NUMERIC(1) NOT NULL,
);
CREATE TABLE estadistica_partido(
    id_jugador          SERIAL NOT NULL,
    id_partido          VARCHAR(70) NOT NULL,
    -- estadisticas de servicio
    rating_servicio     REAL,
    ases                REAL,
    doble_faltas        REAL,
    primeros_servicios  REAL,
    segundos_servicios  REAL,
    ptos_prim_serv      REAL,
    ptos_seg_serv       REAL,
    pb_salvados         REAL,
    games_servicio      REAL,
    -- estadisticas de regreso
    ptos_prim_regr      REAL,
    ptos_seg_regr       REAL,
    pb_convertidos      REAL,
    games_regreso       REAL,
    pto_serv            REAL,
    ptos_regr           REAL,
    tot_ptos            REAL,

    FOREIGN KEY (id_jugador) REFERENCES jugador(id),
    FOREIGN KEY (id_partido) REFERENCES partido(id),
    PRIMARY KEY (id_jugador,id_partido)
);
CREATE TABLE game(
    id          SERIAL NOT NULL PRIMARY KEY,
    id_partido  VARCHAR(70) NOT NULL,
    puntaje     VARCHAR(5),
    set1        VARCHAR(2),
    set2        VARCHAR(2),
    set3        VARCHAR(2),
    set4        VARCHAR(2),
    set5        VARCHAR(2),
    tb1        VARCHAR(25),
    tb2        VARCHAR(25),
    tb3        VARCHAR(25),
    tb4        VARCHAR(25),
    tb5        VARCHAR(25),
    duracion    TIME,

    FOREIGN KEY (id_partido) REFERENCES partido(id)
);
CREATE TABLE jurado_game(
    id_jurado   SERIAL NOT NULL,
    id_game     SERIAL NOT NULL,
    FOREIGN KEY(id_jurado) REFERENCES jurado(id),
    FOREIGN KEY(id_game) REFERENCES game(id),
    PRIMARY KEY(id_jurado,id_game)
);