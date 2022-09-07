# PENPOT

URL: [info](https://help.penpot.app/technical-guide/getting-started/)

## Run container

```bash
docker compose -f docker-compose.yaml up -d
```

## Create user account

```bash
docker exec -ti penpot-penpot-backend-1 ./manage.sh create-profile
```

## Connection by

This will start listening on http://localhost:9001
email: example@gmail.com
pass: ******
