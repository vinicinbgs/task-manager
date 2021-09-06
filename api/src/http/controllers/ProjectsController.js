const CreateProjectUseCase = require("../../useCases/Projects/CreateProjectUseCase");
const GetProjectsUseCase = require("../../useCases/Projects/GetProjectsUseCase");

module.exports = {
  async index(req, res) {
    const projects = await GetProjectsUseCase.execute();

    return res.end(JSON.stringify(projects));
  },

  async store(req, res) {
    const { name } = req.body;

    const project = await CreateProjectUseCase.execute({
      name,
    });

    return res.end(JSON.stringify(project));
  },
};
