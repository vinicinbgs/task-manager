const Sequelize = require("sequelize");
const config = require("../config/database");

const Project = require("../models/Project");
const ProjectTask = require("../models/ProjectTask");

const conn = new Sequelize(config);

Project.init(conn);
ProjectTask.init(conn);

Project.associate(conn.models);
ProjectTask.associate(conn.models);

module.exports = conn;
