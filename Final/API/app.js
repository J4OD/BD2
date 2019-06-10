var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var jurado = require('./routes/jurado_route');
var jugador = require('./routes/jugador_route');
var partido = require('./routes/partido_route');
var game = require('./routes/game_route');
var jurado_game = require('./routes/jurado_game_route');
var estadistica_partido = require('./routes/estadistica_route');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

app.use(jurado);
app.use(jugador);
app.use(partido);
app.use(game);
app.use(jurado_game);
app.use(estadistica_partido);

module.exports = app;
