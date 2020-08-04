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
  const innerMain = `${ProjectPage(JSONProjects)} ${TaskPage(1, JSONProjects)}`;
  main.innerHTML = innerMain;
  return main;
};

export default App;
