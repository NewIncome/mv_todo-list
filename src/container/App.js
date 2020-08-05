import 'css-reset-and-normalize';
import '../styles/style.css';
import ProjectPage from '../pages/Project';
// import Tasks from '../pages/Task';
import projectsJSON from '../assets/projects.json';
import TaskPage from '../pages/Task';

const initProjectObject = () => {
  localStorage.setItem('Projects', JSON.stringify(projectsJSON));
};


const App = () => {
  const main = document.createElement('main');
  main.setAttribute('id', 'main');
  initProjectObject();
  const JSONProjects = JSON.parse(localStorage.getItem('Projects'));
  const taskContainer = document.createElement('div');
  taskContainer.classList.add('tasks');
  const projectContainer = document.createElement('div');
  projectContainer.classList.add('projects');
  main.append(projectContainer, taskContainer);
  projectContainer.innerHTML = ProjectPage(JSONProjects);
  taskContainer.innerHTML = TaskPage(1, JSONProjects);
  return main;
};

export default App;
