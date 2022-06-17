require("dotenv").config();

require("./src/database");

const express = require('express');

const cors = require("cors");

const routes = require("./src/config/routes");

const port = process.env.APP_PORT ?? 9000;

var app = express();

app.use(cors({
  origin: '*'
}))

app.use(express.json());

app.use(express.urlencoded({ extended: false }));

app.use('/', routes);

app.use((err, req, res, next) => {
  return res.status(500).send('Something broke!')
})

app.listen(port, () => {
  console.log(`Server running at ${port}`);
});

process.on('unhandledRejection', err => {
  console.error('There was an uncaught error', err);
});

process.on('uncaughtException', err => {
  console.error('There was an uncaught error', err);
});

module.exports = app;
