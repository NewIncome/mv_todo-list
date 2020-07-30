const Task = require('../model/task');
const saveToLocalStorage = require('./localstorage_controller');

const taskController = (() => {
  let project;

  const setProject = (value) => {
    project = value;
  };

  const addTask = (title, description, dueDate, priority) => {
    const newTask = Task(title, description, dueDate, priority);
    project.setTasks(newTask);
    saveToLocalStorage();
    return newTask;
  };

  const removeTask = (taskId) => {
    const taskIndex = project
      .getTasks()
      .findIndex((task) => task.getId() === taskId);
    if (taskIndex === -1) return false;

    project.getTasks().splice(taskIndex, 1);
    saveToLocalStorage();
    return true;
  };

  const getDateTomorrow = () => {
    const today = new Date();
    today.setDate(new Date().getDate() + 1);
    return today;
  };

  const filterToday = (taskDate) => project.getTasks().filter(task => {
    if (task.getDueDate().getYear() === taskDate.getYear()) {
      if (task.getDueDate().getMonth() === taskDate.getMonth()) {
        if (task.getDueDate().getDate() === taskDate.getDate()) return taskDate;
      }
    }
    return false;
  });

  const filterUpcoming = () => project.getTasks().filter(task => {
    const upcomingdate = new Date().setDate(new Date().getDate() + 1);
    if (task.getDueDate() > upcomingdate) return task;
    return false;
  });

  const findTask = (taskId) => {
    const foundTask = project.getTasks().find((elem) => elem.getId() === taskId);
    return foundTask || false;
  };

  const editTask = (id, title, description, dueDate, priority) => {
    const project = findTask(id);
    if (!project) {
      return false;
    }
    // project.setProjectId(); Maybe later...
    project.setTitle(title || project.getTitle());
    project.setDescription(description || project.getDescription());
    project.setDueDate(dueDate || project.getDueDate());
    project.setPriority(priority || project.getPriority());
    saveToLocalStorage();
    return true;
  };

/*
{
  "today":[{object tasks},{}],
  "tomorrow":[tasks array for tomorrow],
  "nextdays":[tasks array for nextdays],
}
*/

  return {
    addTask,
    removeTask,
    setProject,
    filterUpcoming,
    filterToday,
    getDateTomorrow,
    editTask,
  };
})();

module.exports = {
  taskController,
};
