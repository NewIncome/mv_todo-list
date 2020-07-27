const Task = require('../components/task');
const projectController = require('./project_controller');

const findProject = (projectId) => {
  const findProject = projectController.projects.forEach(
    (element) => element.id === projectId
  );
  return findProject;
};

const addTask = (projectId, title, description, dueDate, priority) => {
  const newTask = Task(title, description, dueDate, priority);
  const parentProject = findProject(projectId);
  parentProject.setTask(newTask);
  return true;
};



export { addTask, removeTask };
