const Project = require("../../models/Project");

module.exports = {
  async execute({ id }) {
    const project = await Project.findByPk(id);

    return await project.destroy();
  },
};
