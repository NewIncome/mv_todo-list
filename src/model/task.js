let globalTaskId = 0;

const Task = (
  title,
  description,
  dueDate,
  priority,
  id = (globalTaskId += 1)
) => {
  const getId = () => id;
  const getTitle = () => title;
  const getDescription = () => description;
  const getDueDate = () => dueDate;
  const getPriority = () => priority;

  const setTitle = (value) => {
    title = value;
  };
  const setDescription = (value) => {
    description = value;
  };
  const setDueDate = (value) => {
    dueDate = value;
  };
  const setPriority = (value) => {
    priority = value;
  };

  return {
    getId,
    getDescription,
    getTitle,
    getDueDate,
    getPriority,
    setDescription,
    setTitle,
    setDueDate,
    setPriority,
  };
};

export default Task;
// exports.task = task;
// module.exports = Task;
