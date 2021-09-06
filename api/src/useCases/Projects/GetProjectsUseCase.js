const Project = require("../../models/Project");
const ProjectTask = require("../../models/ProjectTask");

module.exports = {
  async execute() {
    const projects = await Project.findAll({
      include: {
        association: "tasks",
        separate: true,
        order: [
          ['expire_at', 'ASC']
        ]
      }
    });

    return projects;
  },
};
