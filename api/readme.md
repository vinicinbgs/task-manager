### Step to execute

```bash
git clone https://github.com/vinicinbgs/superplayer-test.git

cd superplayer/api

yarn

sudo docker-compose up -d

yarn sequelize db:migrate

yarn test

yarn start
```

### Where are the HTTP routes definitions?
- api/src/config/routes.js


### Request Lifecycle
```
  request -> controllers -> useCases -> models
     response   <-            <-          <-
```

### If you want reset the database
```
cd superplayer/api

sequelize db:migrate:undo
```
