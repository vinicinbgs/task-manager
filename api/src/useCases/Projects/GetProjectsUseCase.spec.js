require("../../database");

const faker = require("faker");

const GetProjectsUseCase = require("./GetProjectsUseCase");
const CreateProjectUseCase = require("./CreateProjectUseCase");

describe("Get a Projects", () => {
  it("should be able to get all projects", async () => {
    const name = faker.lorem.word();

    await CreateProjectUseCase.execute({
      name,
    });

    projects = await GetProjectsUseCase.execute();

    expect(projects).toEqual(
      expect.arrayContaining([expect.objectContaining({ name })])
    );
  });
});
