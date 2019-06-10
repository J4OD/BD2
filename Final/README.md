# ROLAND GARROS API FINAL
Esta es toda la documentación para poder realizar el API RESTFUL del Roland Garros

## Requerimentos Básicos
Estos requerimentos son basados en la plataforma windows.

* [postgress 10.7, pgAdmin 4](https://www.pgadmin.org/download/pgadmin-4-windows/)
* [Nodejs, npm](https://nodejs.org/es/)
* [Postman](https://www.getpostman.com/)

## Paso 1: Descargar repositorio

El repositorio lo encuentras [aquí] (https://github.com/J4OD/BD2)

## Paso 2: Agregar Base de Datos

Usando pgAdmin puedes ejecutar las sentences sql [bd.sql](https://github.com/J4OD/BD2/blob/master/Final/bd.sql) y realizar la inserción [insertion_2018.sql](https://github.com/J4OD/BD2/blob/master/Final/insertion_2018.sql)
O usar el backup [rolandgarros](https://github.com/J4OD/BD2/blob/master/Final/rolandgarros)

## Paso 3: Configurar conexión Base de datos

En la carpeta API/model/db_config.json encontrarás los datos para realizar la conexión necesaria.

## Paso 4: Instalar y debugear el proyecto

A través de la consola te paras en la carpeta API y realizas el comando "npm install" y luego el comando "npm start"

## Paso 5: Usar postman

al hacer "npm start"  y la ruta localhost:3000 podemos usar todos los servicios del API que se dejarán.





