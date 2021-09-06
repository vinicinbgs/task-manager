const { factory } = require('factory-girl');
const faker = require("faker");

const Project = require('../models/Project');
const ProjectTask = require('../models/ProjectTask');

factory.define('Project', Project, {
  name: faker.lorem.word()
});

factory.define('ProjectTask', ProjectTask, {
  name: faker.lorem.word(),
  owner: faker.name.firstName(),
  expire_at: faker.date.future()
})

module.exports = factory;