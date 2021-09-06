const faker = require("faker");
const DeleteProjectUseCase = require("./DeleteProjectUseCase");

const factory = require("../../database/factories");
const Project = require("../../models/Project");

require("../../database");

describe("Delete a Project", () => {
  it("should be able to delete a project", async () => {
    const project = await factory.create('Project');

    await DeleteProjectUseCase.execute({
      id: project.id,
    });

    const check = await Project.findByPk(project.id);
    
    expect(check).toEqual(null);
  });
});
