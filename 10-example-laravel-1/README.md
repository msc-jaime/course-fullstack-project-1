# Entorno de desarrollo para laravel 9

## Ejecusión de entorno de desarrollo de bitnami

```!/bin/bash
docker compose up
```

## Correr compandos dentro del contenedor

Ver los contenedores en la maquina local

```cli
docker container ls
```

Ejemplo 1: Enviar comando al contenedor

```cli
docker exec name-container php artisan migrate
```

Ejemplo 2: Enviar comando al contenedor

```bash
docker exec myapp-laravel-1 php artisan make:controller DataController
```
