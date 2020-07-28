const Task = require('../components/task');

const taskController = (() => {
  let project;

  const setProject = (value) => {
    project = value;
  };

  const addTask = (title, description, dueDate, priority) => {
    const newTask = Task(title, description, dueDate, priority);
    project.setTasks(newTask);
    return newTask;
  };

  const removeTask = (taskId) => {
    const taskIndex = project
      .getTasks()
      .findIndex((task) => task.getId() === taskId);
    if (taskIndex === -1) return false;

    project.getTasks().splice(taskIndex, 1);

    return true;
  };

  const getDateTomorrow = () => {
    const today = new Date();
    today.setDate(new Date().getDate() + 1);
    return today;
  };

  const filterByDate = (taskDate) => project.getTasks().filter(task => {
    if (task.getDueDate().getYear() === taskDate.getYear()) {
      if (task.getDueDate().getMonth() === taskDate.getMonth()) {
        if (task.getDueDate().getDate() === taskDate.getDate()) return taskDate;
      }
    }
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
    // save again to local storage
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
    filterByDate,
    getDateTomorrow,
    editTask,
  };
})();

module.exports = {
  taskController,
};
