const ProjectTask = require("../../models/ProjectTask");

module.exports = {
  async execute({ project_id, done, id }) {
    const task = await ProjectTask.findOne({
      where: {
        id,
        project_id,
      },
    });

    if (!task) {
      return null;
    }

    task.done_at = (done) ? new Date().toISOString() : null;

    await task.save();

    return task.dataValues;
  },
};
