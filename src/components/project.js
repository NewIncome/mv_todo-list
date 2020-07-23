let globalProjectId = 0;

const project = (projectTitle, projectDescription) => {
  const id = globalProjectId;
  let title = projectTitle;
  let description = projectDescription;
  globalProjectId += 1;

  const editTitle = (newTitle) => { title = newTitle; };
  const editDescription = (newDescription) => { description = newDescription; };

  return {
    id,
    title,
    description,
    editDescription,
    editTitle,
  };
};

export default project;