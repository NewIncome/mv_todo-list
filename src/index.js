// import project from './components/project';
// import task from './components/task';
const {
  addProject,
  removeProject,
  editProject,
  projects,
} = require('./controllers/project_controller');
const task = require('./components/task');

const firstProject = addProject('Work', 'First projects description');
const secondProject = addProject('Frontend', 'Second projects description');
const thirdProject = addProject('Devops', 'Third projects description');

const firstTask = task(
  1,
  '1stTask Title',
  'First jobs description',
  new Date(),
  'high',
);
const secondTask = task(
  3,
  '2stTask Title ',
  'Second  jobs description for the first project',
  new Date(),
);

console.log('FIRST PROJECT');
console.log(firstProject.getId());
// console.log(firstProject.getTitle());
// console.log(firstProject.getDescription());
// console.log(projects);
// console.log('FIRST TASK - 1 proj');
// console.log(firstTask.getId());
// console.log(firstTask.getProjectId());
// console.log(firstTask.getTitle());
// console.log(firstTask.getDescription());
// console.log(firstTask.getDueDate());
// console.log(firstTask.getPriority());
console.log('SECOND TASK - 1 proj');
console.log(secondTask.getId());
console.log('P-id: ' + secondTask.getProjectId());
// console.log(secondTask.getTitle());
// console.log(secondTask.getDescription());
// console.log(secondTask.getDueDate());
// console.log(secondTask.getPriority());
console.log(typeof firstProject);
console.log(typeof firstTask);
console.log(typeof firstProject.getDescription);
console.log(Object.values(firstProject)[0]());
console.log(Object.keys(firstProject));

console.log(firstProject.getDescription());
editProject(firstProject, 'Description', 'Project #1, updated and upgraded description');
console.log(firstProject.getDescription());