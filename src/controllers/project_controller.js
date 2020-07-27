const Project = require('../components/project');

const projects = [];

const addProject = (title, description) => {
  const newProject = Project(title, description);
  projects.push(newProject);
  return newProject;
};

const removeProject = (projectId) => {
  const index = projects.findIndex(project => project.getId() === projectId);
  if (index !== -1) projects.splice(index, 1);
};

const editProject = (project, property, value) => {
  Object.keys(project).forEach((method, i) => {
    if (method == `set${property}`) Object.values(project)[i](value);
  });
  // window[`get${property}`](value); // this works in browser JS only.
};


module.exports = {
  addProject,
  removeProject,
  editProject,
  projects,
};