let globalTaskId = 0;

class Task {
  constructor(
    taskTitle,
    taskProject,
    taskDescription,
    taskDueDate,
    taskPriority,
  ) {
    this.id = globalTaskId;
    this.projectId = taskProject;
    this.title = taskTitle;
    this.description = taskDescription;
    this.dueDate = taskDueDate;
    this.priority = taskPriority;
    globalTaskId += 1;
  }

  // getproject object
  // const getProject=()=>{write a function to search the project object}

  // const filterbyDate=(date)=>{
  //   //date today()
  //   if date eq today
  //   taskarray.push(task)
  //   return rtaskaaraya
  // };

  get id() { return this.id; }

  get projectId() { return this.projectId; }

  get title() { return this.title; }

  get description() { return this.description; }

  get dueDate() { return this.dueDate; }

  get priority() { return this.priority; }

  set projectId(newprojectId) { this.projectId = newprojectId; }

  set title(newTitle) { this.title = newTitle; }

  set description(newDescription) { this.description = newDescription; }

  set dueDate(newDueDate) { this.dueDate = newDueDate; }

  set priority(newPriority) { this.priority = newPriority; }
}

// export default task;
// exports.task = task;
module.exports = Task;
