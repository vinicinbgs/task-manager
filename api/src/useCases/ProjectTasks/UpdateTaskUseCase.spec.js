const factory = require("../../database/factories");

const UpdateTaskUseCase = require("./UpdateTaskUseCase");

const { formatToBrDate } = require('../../helpers');

require("../../database");

describe("Update a Task Project", () => {
  it("should be able to mark with done a task project", async () => {
    const project = await factory.create('Project');
    
    const task = await factory.create('ProjectTask', {
      project_id: project.id
    });

    const taskDone = await UpdateTaskUseCase.execute({
      id: task.id,
      project_id: project.id,
      done: true,
    });
    
    const objectStructure = ["id", "project_id", "name", "owner", "done_at", "expire_at", "created_at", "updated_at"].sort();

    expect(Object.keys(taskDone).sort()).toEqual(objectStructure);

    expect(formatToBrDate(taskDone.done_at)).toEqual(formatToBrDate(new Date()));
  });

  it("should be able to unmark done in a task project", async () => {
    const project = await factory.create('Project');
    
    const task = await factory.create('ProjectTask', {
      project_id: project.id
    });

    const taskDone = await UpdateTaskUseCase.execute({
      id: task.id,
      project_id: project.id,
      done: false,
    });
    
    const objectStructure = ["id", "project_id", "name", "owner", "done_at", "expire_at", "created_at", "updated_at"].sort();

    expect(Object.keys(taskDone).sort()).toEqual(objectStructure);

    expect(formatToBrDate(taskDone.done_at)).toEqual(null);
  });
});
