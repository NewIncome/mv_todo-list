import 'css-reset-and-normalize';
import '../styles/style.css';
import ProjectPage from '../pages/Project';
// import Tasks from '../pages/Task';
import projectsJSON from '../assets/projects.json';
import projectController from '../controllers/project_controller';

const initProjectObject = () => {
  const projectObjects = projectsJSON;

  localStorage.setItem('Projects', JSON.stringify(projectObjects));
  projectController.projects = JSON.parse(localStorage.getItem('Projects'));
};
const App = () => {
  const main = document.createElement('main');
  main.setAttribute('id', 'main');
  initProjectObject();
  const projectsLocalStorage = JSON.parse(localStorage.getItem('Projects'));

  main.innerHTML = ProjectPage(projectController.projects);
  // main.innerHTML = TaskPage(projectsLocalStorage.task)1;
  return main;
};

export default App;
