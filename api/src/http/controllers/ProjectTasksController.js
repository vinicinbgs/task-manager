const CreateTaskUseCase = require("../../useCases/ProjectTasks/CreateTaskUseCase");
const UpdateTaskUseCase = require("../../useCases/ProjectTasks/UpdateTaskUseCase");

const { storeValidate, updateValidate } = require("../validators/ProjectTasksValidator");

module.exports = {
  async store(req, res) {
    const validatedData = await storeValidate(req, res);
    
    if (validatedData.title == 'error') {
      return res.status(422).send(validatedData);
    }

    const task = await CreateTaskUseCase.execute(validatedData);

    if (!task) {
      return res.status(404).send({
        title: 'error',
        message: 'This project doesn\'t exists'
      });
    }

    return res.status(200).send(task);
  },

  async update(req, res) {
    const validatedData = await updateValidate(req, res);

    const task = await UpdateTaskUseCase.execute(validatedData);

    if (!task) {
      res.status(404).send({
        title: 'error',
        message: 'This task doesn\'t exists'
      });
    }

    return res.status(200).send(task);
  },
};
