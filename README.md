# Task Manager

#### Explain:
- api - is the backend folder with nodejs
- app - is the frontend folder with nextjs (SSR)

you need to clone this repository and in root folder where have the docker-compose.yml, execute:
```
docker-compose up -d --build
docker-compose exec api yarn sequelize db:migrate
```

after run this command you can open in browser http://localhost:3000

#### the API PORT is 9000
#### the APP PORT is 3000
#### the MySQL PORT is 3306
