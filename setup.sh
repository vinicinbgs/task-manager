#!bin/sh

echo "Start Containers"
docker-compose up -d

echo "Exec Migrations"
until docker-compose exec api yarn sequelize db:migrate; do
  echo retrying in 10 seconds...
  sleep 10
done
