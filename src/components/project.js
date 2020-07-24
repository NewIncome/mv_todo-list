let globalProjectId = 0;

const Project = (id = (globalProjectId += 1), title, description) => {
  const getId = () => id;
  const getTitle = () => title;
  const getDescription = () => description;

  const setTitle = (value) => {
    title = value;
  };
  const setDescription = (value) => {
    description = value;
  };

  return {
    getId,
    getTitle,
    getDescription,
    setTitle,
    setDescription,
  };
};

// export default project;
// exports.project = project;
module.exports = Project;
