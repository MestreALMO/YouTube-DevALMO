This project was done for the YouTube Vídeo: https://www.youtube.com/watch?v=EK6V-_5VWUY

## Prerequisites
To run in Windows 10 you need to install some tools, like: NodeJS, Chocolatey and more. [here](https://github.com/MestreALMO/React-Requires-To-Run-Windows-) is how to install all of it. And also Docker
<br/>

## Running
Access the root of the project with a terminal, don't forget to run ```yarn``` if it is the first time running the project, then run the code:
```
yarn start
```
With that the app will be running! 
<br />You can access it with ```http://localhost:3000/```

# To use Docker in other applications keep in mind that you will need everything below:

## Files
Dockerfile

.dockerignore

docker-compose

## Run by Dockerfile:
docker build -t react-default .

docker run -v ${PWD}:/app -v /app/node_modules -p 3001:3000 --rm react-default

## Run by docker-compose:

docker-compose up -d --build

docker-compose stop

# Contact
My Name: André Lusegardis Miranda de Oliveira
  * lusegardis@gmail.com
  * [LinkedIn](https://www.linkedin.com/in/andr%C3%A9-lusegardis/detail/recent-activity/shares/)
  * [GitHub](https://github.com/MestreALMO)
  * [YouTube](https://www.youtube.com/channel/UCoxaVAl8-XHPv__s48HMPZA)
  * [LinkedIn](https://twitter.com/Lusegardis)
  * [CodePen](https://codepen.io/MestreALMO)
