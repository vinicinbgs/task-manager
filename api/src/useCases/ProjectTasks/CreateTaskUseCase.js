const ProjectTask = require("../../models/ProjectTask");

module.exports = {
  async execute({ project_id, name, owner, expire_at }) {
    try {
      const task = await ProjectTask.create({
        project_id,
        name,
        owner,
        expire_at
      });

      return task.dataValues;
    } catch (e) {
      return null;
    }
  },
};
