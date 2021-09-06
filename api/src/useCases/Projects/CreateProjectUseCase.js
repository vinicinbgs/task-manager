const Project = require("../../models/Project");

module.exports = {
  async execute({ name }) {
    const project = await Project.create({
      name,
    });

    return project.dataValues;
  },
};
