\*\*\*Files
Dockerfile
.dockerignore
docker-compose

\*\*\*Run by Dockerfile:
docker build -t react-default .
docker run -v ${PWD}:/app -v /app/node_modules -p 3001:3000 --rm react-default

\*\*\*Run by docker-compose:
docker-compose up -d --build
docker-compose stop
