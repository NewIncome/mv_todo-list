import Project from '../model/project';
import saveToLocalStorage from './localstorage_controller';

const projectController = (() => {
  const projects = [];

  const addProject = (title, description) => {
    const newProject = Project(title, description);
    projects.push(newProject);
    saveToLocalStorage(projects);
    return newProject;
  };

  const removeProject = (projectId) => {
    const index = projects.findIndex(
      (project) => project.getId() === projectId,
    );
    if (index !== -1) {
      projects.splice(index, 1);
      saveToLocalStorage(projects);
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
    project.setDescription(description || project.getDescription());
    saveToLocalStorage(projects);
    return true;
  };

  return {
    addProject,
    removeProject,
    editProject,
    projects,
  };
})();

export default projectController;
