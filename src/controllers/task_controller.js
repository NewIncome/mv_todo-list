const Task = require('../components/task');
const projectController = require('./project_controller');

const allTasks = [];

const findProject = (projectId) => {
  const findProject = projectController.projects.forEach(
    (element) => element.id === projectId,
  );
  return findProject;
};

const addTask = (projectId, title, description, dueDate, priority) => {
  const newTask = Task(projectId, title, description, dueDate, priority);
  allTasks.push(newTask);
  // const parentProject = findProject(projectId);
  // parentProject.setTask(newTask);
  return newTask;
};

const removeTask = (taskId) => {
  const taskIndex = allTasks.findIndex(task => task.getId() === taskId);
  if (taskIndex !== -1) {
    allTasks.splice(taskIndex, 1);
    return true;
  }
  return false;
};

const filterByProject = (projectId) => allTasks.filter(task => task.getProjectId() === projectId);

const filterByDate = (taskDate) => allTasks.filter(task => task.getDueDate() <= taskDate);

// const removeTask = (taskId) => {
//   const findProject = projectController.projects.forEach( (element) => element.id === projectId );
//   const index = task.ge.getTasks() .findIndex((task) => task.getId() === taskId); if (index !== -1) projects.splice(index, 1);
// };


module.exports = {
  addTask,
  removeTask,
  allTasks,
  filterByProject,
  filterByDate,
};
