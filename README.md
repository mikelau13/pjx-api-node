# pjx-api-node

Api layer developed with [Restify](http://restify.com), this Api is part of my demo project, please visit [pjx project](https://github.com/mikelau13/pjx-root) for more details.


## Build & Launch

To start the docker container, run this command:

```bash
docker-compose up --build
```

Or if you want to run the app directly locally:

```bash
npm start
```

To test:

```bash
curl http://localhost:8081/healthcheck
curl http://localhost:8081/api/1/cities/
curl http://localhost:8081/api/1/city/1
```
