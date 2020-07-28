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

  const filterByDate = (taskDate) => {
    const tasks = project
      .getTasks()
      .filter((task) => task.getDueDate() <= taskDate);
    return tasks;
  };

  // const filterByDate = (taskDate) => allTasks.filter(task => {
  //   if (task.getDueDate().getYear() === taskDate.getYear()) {
  //     if (task.getDueDate().getMonth() === taskDate.getMonth()) {
  //       if (task.getDueDate().getDate() === taskDate.getDate()) return taskDate;
  //     }
  //   }
  //   return false;
  // });

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
  };
})();

module.exports = {
  taskController,
};
