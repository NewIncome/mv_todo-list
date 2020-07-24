// import project from './components/project';
// import task from './components/task';
const Project = require('./components/project');
const Task = require('./components/task');

const firstProject = new Project('Work', 'First projects description');
const secondProject = new Project('Frontend', 'Second projects description');
const thirdProject = new Project('Devops', 'Third projects description');

const firstTask = new Task(
  '1stTask Title',
  'First jobs description',
  new Date(),
  1,
  0,
);
const secondTask = new Task(
  '2stTask Title ',
  'Second  jobs description for the first project',
  new Date(),
  3,
);

console.log('FIRST PROJECT');
console.log(firstProject);
// console.log('FIRST TASK - 1 proj');
// console.log(firstTask);
// console.log('SECOND TASK - 1 proj');
// console.log(secondTask);

console.log(typeof firstProject);