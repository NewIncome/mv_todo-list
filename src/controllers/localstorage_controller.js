const { projectController } = require('./project_controller');

const getTasks = (tasksArray) => {
  const result = [];
  tasksArray.forEach((element) => {
    const taskObject = {
      id: element.getId(),
      title: element.getTitle(),
      description: element.getDescription(),
    };
    result.push(taskObject);
  });
  return result;
};

const ObjectToLocalStorage = (projects) => {
  const projectsArray = [];

  projects.forEach(projectElement => {
    const project = {
      id: projectElement.getId(),
      title: projectElement.getTitle(),
      description: projectElement.getDescription(),
      tasks: getTasks(projectElement.getTasks()),
    };
    projectsArray.push(project);
  });

  return projectsArray;
};

const saveToLocalStorage = () => {
  const value = ObjectToLocalStorage(projectController.projects);
  localStorage.setItem('Projects', JSON.stringify(value));
};

module.exports = saveToLocalStorage;