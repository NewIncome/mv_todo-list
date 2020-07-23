import project from './project';

let globalTaskId = 0;

const task = (taskTitle, taskProject, taskDescription, taskDueDate, taskPriority) => {
  const id = globalTaskId;
  const projectId = project.id;
  let title = taskTitle;
  let description = taskDescription;
  let dueDate = taskDueDate;
  let priority = taskPriority;
  globalTaskId += 1;

  const editTitle = (newTitle) => { title = newTitle; };
  const editDescription = (newDescription) => { description = newDescription; };
  const editDueDate = (newDueDate) => { dueDate = newDueDate; };
  const editPriority = (newPriority) => { priority = newPriority; };

  return {
    id,
    projectId,
    title,
    description,
    dueDate,
    priority,
    editDescription,
    editTitle,
    editDueDate,
    editPriority,
  };
};

export default task;