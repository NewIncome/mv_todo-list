const getTasks = (tasksArray) => {
  const result = [];
  tasksArray.forEach((element) => {
    const taskObject = {
      id: element.getId(),
      title: element.getTitle(),
      description: element.getDescription(),
      dueDate: element.getDueDate(),
      priority: element.getPriority(),
    };
    result.push(taskObject);
  });
  return result;
};

const ObjectToLocalStorage = (projects) => {
  const projectsArray = [];

  projects.forEach((projectElement) => {
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

const saveToLocalStorage = (projects) => {
  const value = ObjectToLocalStorage(projects);
  localStorage.setItem('Projects', JSON.stringify(value));
};

export default saveToLocalStorage;
