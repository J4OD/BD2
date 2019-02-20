# UNIVERSIDAD AUTÓNOMA LATINOAMERICANA
# FACULTAD DE INGENIERÍAS
# INGENIERÍA INFORMÁTICA

# BASES DE DATOS II
# TALLER I
# Por
# Jerónimo Andrés Ortega Duque

## 1. Defina los siguientes conceptos:

### Tabla:

Las tablas es el objeto de la base de datos más fundamental para las bases de datos relacionales, estas identifican la relación de 1 elemento con sus valores a través de un formato de fila y columna similar a una hoja de calculo.

Para esto definiremos la tabla como una relación de dominios que identifican un elemento único, cada fila de la tabla representará una tupla y cada columna de la tabla representará un componente de esta.

Un Ejemplo claro y conciso será una tabla empleados en donde relacione en la tabla los dominios de cedula y nombre de cada uno de las tuplas.

![img_tabla](/Taller1/media/tabla.png)

### Tupla:

Identificaremos una tabla como una fila de una tabla que contiene un registro único de dicha relación.

### N-tupla:

Identificaremos esta palabra como el n elementos de una tupla.

### Relación:

Identificaremos una relación como un subconjunto del producto cartesiano de una lista de dominios. 
Ejemplo: empleados(Esquema-Empleado).

Ojo, es importante recalcar que una relación puede dar representación de los dominios de una tabla o conexiones entre tablas.

### Atributo:

Es el nombre asignado a cada columna de la relación, su orden carece de importancia.
Cada atributo está referido a un dominio de donde toma el valor para cada tupla que pertenezca a la relacion.
Este datos deben de ser atómicos y pueden o no admitir valores desconocidos(nulos).

### Dominio:

Es un conjunto de valores escalares del mismo tipo.

### Esquema:

Es el conjunto de atributos de una relación y su dominio, Ejemplo: Esquema-Empleado(cedula:numérica,nombre:cadena-alfabetica)

### Instancia:

Una instancia se define como las tuplas contenidas en un determinado momento de la relación.

### Super clave:

Una superclave es la combinación mínima de columnas que cumplen con las propiedades de una clave candidata, un ejemplo claro puede ser que la cedula+nombre+fecha_nacimiento cumplen como super clave de una persona.

### Claves Candidatas:

Es el atributo K de una relación R, será definida como una clave candidata si y solo si cumplen con las dos propiedades siguientes independientes del tiempo:

#### Unicidad:

En cualquier momento dado no existen dos tuplas en R con el mismo valor K

#### Minimalidad:

Si K es compuesto, no será posible eliminar ningun componente de K sin destruir la propiedad de unicidad.

![clave_cand](/Taller1/media/claves_candidatas.png)

### Claves Primarias:

Toda relación debe poseer una clave primaria. Atributo tomado del conjunto de atributos que son claves candidatas.

La regla principal es que ningun componente de la clave primaria de una relación puede aceptar valores nulos o desconocidos.

### Claves Foráneas:

Una clave foránea es un atributo (quizás compuesto) de una relacion R2 cuyos valores deben en todo momento del tiempo:

#### concordar con los de la clave primaria de alguna relación R1 o ser nulos.
(donde R1 y R2 no necesariamente son dos relaciones distintas)

### Operacion:

Una operación dentro de los Sistemas Generadores de Bases de Datos (SGBD) relacional deben de cumplir con las operaciones dentro del algebra relacional.

Esta algebra se apoya en operadores especializados sobre las relaciones.
Es un algebra cerrada, es decir, el resultado de una operación definida sobre las relaciones son a su vez nuevas relaciones.
Opera únicamente sobre el modelo de datos, no se requiere saber nada de la estructura física de sus datos.
Provee un lenguaje lo suficientemente rico para hacer útil al SGBD.
Requiere de un esquema de optimización de operaciones para alcanzar respuestas rápidas.

Estas son:
#### BASICAS
##### UNIÓN (R U S)
##### DIFERENCIA (R - S)
##### PRODUCTO CARTESIANO (R x S)
##### RENOMBRAR x(E)
##### PROYECCIÓN 
##### SELECCIÓN
#### ADICIONALES
##### INTERSECCIÓN (R n S)
##### DIVISIÓN (R n S)
##### REUNIÓN-0 
##### REUNIÓN NATURAL
##### REUNIÓN EXTERNA

### JOIN
Los JOIN son el conjunto de instrucciones en sql que permite realizar las operaciones del algebra relacional Reunion Natural y Reunion Externa segun sea su caso.

## 2.

todas las operaciones podrá encontrarlas en el "script_taller1.sql" de la presente carpeta

# REFERENCIAS
## Jeffrey D. Ullman. and Jennifer Widom. A First Course in Database Systems. Prentice Hall.  Cap. 1.  pp. 1-24.
## Jeffrey D. Ullman.  Principles of  Database and Knowledge-Base System.  Volúmenes I.   Computer Science Press. 1988. Capítulo 1.  pp. 1-29
## Henry F. Korth, Abraham Silberschatz.  Fundamentos de Bases de Datos. Mc Graw Hill.
## Database Management and Systems. Jennifer Widom. Stanford University. 
## Silberschatz, Korth, Sudarshan. Fundamentos de Bases de Datos. Cuarta edición. 2002. McGraw-Hill.
## James R. Groff, Paul N. Weinberg. Aplique SQL. McGraw-Hill. 1991. 
