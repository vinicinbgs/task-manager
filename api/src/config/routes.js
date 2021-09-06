const router = require("router")();

const ProjectsController = require("../http/controllers/ProjectsController");
const ProjectsTasksController = require("../http/controllers/ProjectTasksController");

// Projects
router.get("/projects", ProjectsController.index);
router.post("/projects", ProjectsController.store);

// Project Tasks
router.post("/projects/:project_id/tasks", ProjectsTasksController.store);
router.put("/projects/:project_id/tasks/:id", ProjectsTasksController.update);

module.exports = router;
