// import project from './components/project';
// import task from './components/task';
const project = require('./components/project');
const task = require('./components/task');

const firstProject = project('Work', 'First projects description');
const secondProject = project('Frontend', 'Second projects description');
const thirdProject = project('Devops', 'Third projects description');

const firstTask = task(
  '1stTask Title',
  'First jobs description',
  new Date(),
  1,
  0
);
const secondTask = task(
  '2stTask Title ',
  'Second  jobs description for the first project',
  new Date(),
  3
);

console.log('FIRST PROJECT');
console.log(firstProject);
console.log('FIRST TASK - 1 proj');
console.log(firstTask);
console.log('SECOND TASK - 1 proj');
console.log(secondTask);

console.log(typeof firstProject);