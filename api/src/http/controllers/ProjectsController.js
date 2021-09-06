const CreateProjectUseCase = require("../../useCases/Projects/CreateProjectUseCase");
const GetProjectsUseCase = require("../../useCases/Projects/GetProjectsUseCase");
const DeleteProjectUseCase = require("../../useCases/Projects/DeleteProjectUseCase");

module.exports = {
  async index(req, res) {
    const projects = await GetProjectsUseCase.execute();

    return res.status(200).send(projects);
  },

  async store(req, res) {
    const { name } = req.body;

    const project = await CreateProjectUseCase.execute({
      name,
    });

    return res.status(200).send(project);
  },

  async delete (req, res) {
    const { id } = req.params;

    await DeleteProjectUseCase.execute({
      id
    })

    return res.status(201).send();
  }
};
