const faker = require("faker");
const CreateTaskUseCase = require("./CreateTaskUseCase");
const factory = require("../../database/factories");

require("../../database");

describe("Create a Task Project", () => {
  it("should be able to create a new task in a project", async () => {
    const project = await factory.create('Project');

    const task = await CreateTaskUseCase.execute({
      project_id: project.id,
      name: faker.lorem.word(),
      owner: faker.name.firstName(),
      expire_at: faker.date.future()
    });
    
    const objectStructure = ["id", "project_id", "name", "owner", "expire_at", "created_at", "updated_at"].sort();

    expect(Object.keys(task).sort()).toEqual(objectStructure);
  });
});
