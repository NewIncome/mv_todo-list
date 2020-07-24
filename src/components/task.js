let globalTaskId = 0;

const task = (
  projectId,
  title,
  description,
  dueDate,
  priority = 'low',
  id = (globalTaskId += 1),
) => {
  const getId = () => id;
  const getProjectId = () => projectId;
  const getTitle = () => title;
  const getDescription = () => description;
  const getDueDate = () => dueDate;
  const getPriority = () => priority;

  // getproject object
  // const getProject=()=>{write a function to search the project object}

  // const filterbyDate=(date)=>{
  //   //date today()
  //   if date eq today
  //   taskarray.push(task)
  //   return rtaskaaraya
  // };

  const setProjectId = (value) => {
    projectId = value;
  };
  const setTitle = (value) => {
    title = value;
  };
  const setDescription = (value) => {
    description = value;
  };
  const setDueDate = (value) => {
    dueDate = value;
  };
  const setPriority = (value) => {
    priority = value;
  };

  return {
    getId,
    getProjectId,
    getDescription,
    getTitle,
    getDueDate,
    getPriority,
    setProjectId,
    setDescription,
    setTitle,
    setDueDate,
    setPriority,
  };
};

// export default task;
// exports.task = task;
module.exports = task;
