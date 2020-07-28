const Project = require('../components/project');

const projectController = (() => {
  const projects = [];

  const addProject = (title, description) => {
    const newProject = Project(title, description);
    projects.push(newProject);
    // save to local storage
    return newProject;
  };

  const removeProject = (projectId) => {
    const index = projects.findIndex(
      (project) => project.getId() === projectId
    );
    if (index !== -1) {
      projects.splice(index, 1);
      // save again to local storage
    }
  };

  const findProject = (projectId) => {
    const project = projects.find((elem) => elem.getId() === projectId);
    return project || false;
  };

  const editProject = (id, title, description) => {
    const project = findProject(id);
    if (!project) {
      return false;
    }
    project.setTitle(title || project.getTitle());
    project.setDescription(description || project.getTitle());
    // save again to local storage
    return true;
  };

  return {
    addProject,
    removeProject,
    editProject,
  };
})();

module.exports = {
  projectController,
};
