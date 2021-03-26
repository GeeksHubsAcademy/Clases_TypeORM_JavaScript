# BaseTypeScriptProject
Proyecto Base para las clases de TypeORM

1º Descargar el proyecto.

```
$ git clone https://github.com/GeeksHubsAcademy/Clases_TypeORM_JavaScript.git
```

2º Ejecutar 
```
$ npm install
```

3º Compilar migración.
```
$ npm run build
```

4º Ejecutar migración.
```
$ npm run typeorm migration:run
```

5º Levantar el proyecto ejecutando el comando
```
$ npm run dev
```

6º Levantar la Base de datos con el comando.
```
$ docker-compose up
```
### Datos de acceso a la BD:
```
* host: mariadb_container
* user: geekshubs
* password: geekshubs

```

## Otras opciones.
### Como crear una migración y ejecutarla.
1º Creamos el archivo de migración.
```
$npm run typeorm:create [nombre de la migración]
```

2º La compilamos.
```
$npm run build
```

3º Ejecutar migración.
```
$ npm run typeorm migration:run
```


