### Step to execute

```bash
yarn

docker-compose up -d

yarn sequelize db:migrate

yarn test

yarn start
```

### Where are the HTTP routes definitions?
- api/src/config/routes.js


### Request Lifecycle
```bash
  request -> controllers -> useCases -> models
     response   <-            <-          <-
```

### If you want reset the database
```bash
sequelize db:migrate:undo
```
