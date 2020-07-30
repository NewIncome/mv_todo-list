let globalProjectId = 0;

const Project = (title, description, id = (globalProjectId += 1)) => {
  const tasks = [];
  const getId = () => id;
  const getTitle = () => title;
  const getDescription = () => description;
  const getTasks = () => tasks;

  const setTitle = (value) => {
    title = value;
  };
  const setDescription = (value) => {
    description = value;
  };

  const setTasks = (value) => {
    tasks.push(value);
  };

  return {
    getId,
    getTitle,
    getDescription,
    getTasks,
    setTitle,
    setDescription,
    setTasks,
  };
};

export default Project;
// exports.project = project;
// module.exports = Project;
