
const { projectController } = require('./controllers/project_controller');
const { taskController } = require('./controllers/task_controller');

const firstProject = projectController.addProject(
  'Work',
  'First projects description',
);
const secondProject = projectController.addProject(
  'Frontend',
  'Second projects description',
);
const thirdProject = projectController.addProject(
  'DevOps',
  'Third projects description',
);

taskController.setProject(firstProject);

const firstTask = taskController.addTask(
  '1stTask Title',
  'First jobs description',
  new Date(2020, 6, 30),
  'high',
);
const secondTask = taskController.addTask(
  '2stTask Title ',
  'Second  jobs description for the first project',
  new Date(2020, 6, 29),
);
// const thirdTask = taskController(firstProject).addTask(
//   '2stTask Title ',
//   'Second  jobs description for the first project',
//   new Date(2020, 6, 4)
// );
// const fourthTask = taskController(firstProject).addTask(
//   '2stTask Title ',
//   'Second  jobs description for the first project',
//   new Date(2020, 6, 6)
// );
// const fifthTask = taskController(firstProject).addTask(
//   '2stTask Title ',
//   'Second  jobs description for the first project',
//   new Date(2020, 6, 8)
// );
// const sixthTask = taskController(firstProject).addTask(
//   '2stTask Title ',
//   'Second  jobs description for the first project',
//   new Date(2020, 6, 10)
// );

console.log(firstProject.getId());
console.log(firstProject.getTitle());
console.log(firstProject.getDescription());
console.log(firstProject.getTasks());

if (
  projectController.editProject(
    firstProject.getId(),
    'Work',
    'this is a edited description ',
  )
) {
  console.log(`${firstProject.getTitle()} edited`);
  console.log(firstProject.getDescription());
}

// taskController.removeTask(6);
// console.log(firstProject.getTasks());
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

const project = {
  id: firstProject.getId(),
  title: firstProject.getTitle(),
  description: firstProject.getDescription(),
  tasks: getTasks(firstProject.getTasks()),
};
// console.log(project);
// console.log(JSON.stringify(project));
// console.log(JSON.parse(JSON.stringify(project)));
console.log(' ----- filterr by DATES ----- ');
// console.log(taskController.filterByDate(new Date())[0].getTitle()); // today
// console.log(taskController.filterByDate(taskController.getDateTomorrow())[0].getTitle());
console.log(taskController.filterUpcoming()[0].getTitle()); // today

if (taskController.editTask(firstTask.getId(), '1st Task Ever!', 'this is a edited description for this task', new Date(2020, 6, 30))) {
  console.log(`${firstTask.getTitle()} edited`);
  console.log(firstTask.getDescription());
  console.log(firstTask.getDueDate());
  console.log(firstTask.getPriority());
}
