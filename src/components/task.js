let globalTaskId = 0;

const task = (
  taskTitle,
  taskDescription,
  taskDueDate,
  taskPriority,
  taskProject,
) => {
  const id = globalTaskId;
  const projectId = taskProject;
  let title = taskTitle;
  let description = taskDescription;
  let dueDate = taskDueDate;
  let priority = taskPriority;
  globalTaskId += 1;
  // getproject object
  // const getProject=()=>{write a function to search the project object}
  const editTitle = (newTitle) => {
    title = newTitle;
  };

  // const filterbyDate=(date)=>{
  //   //date today()
  //   if date eq today
  //   taskarray.push(task)

  //   return rtaskaaraya

  // };

  const editDescription = (newDescription) => {
    description = newDescription;
  };
  const editDueDate = (newDueDate) => {
    dueDate = newDueDate;
  };
  const editPriority = (newPriority) => {
    priority = newPriority;
  };

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

// export default task;
// exports.task = task;
module.exports = task;
