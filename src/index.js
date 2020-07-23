import project from './components/project';
import task from './components/task';

const firstProject = project('Work', 'First project\'s description');
const firstTask = task('1st Job', 1, '1stTask Title', 'First job\'s description', 'July 30th', 'high');

console.log(firstProject);
console.log(firstTask);