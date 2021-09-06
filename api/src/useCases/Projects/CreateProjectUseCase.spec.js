const faker = require("faker");
const CreateProjectUseCase = require("./CreateProjectUseCase");

require("../../database");

describe("Create a Project", () => {
  it("should be able to create a new project", async () => {
    project = await CreateProjectUseCase.execute({
      name: faker.lorem.word(),
    });

    const objectStructure = ["id", "name", "created_at", "updated_at"].sort();

    expect(Object.keys(project).sort()).toEqual(objectStructure);
  });
});
