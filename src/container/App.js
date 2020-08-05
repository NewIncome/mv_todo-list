import 'css-reset-and-normalize';
import '../styles/style.css';
import ProjectPage from '../pages/Project';
import TaskPage from '../pages/Task';
import taskController from '../controllers/task_controller';
import projectController from '../controllers/project_controller';

const initProjectObject = () => {

  const firstProject = projectController.addProject(
    'Work',
    'All related with work'
  );
  const secondProject = projectController.addProject(
    'Personal',
    'Almost my personal dairy'
  );

  taskController.setProject(firstProject);

  taskController.addTask(
    'Send email intro cold email to Spotify frontend developer',
    "Send email intro cold email to Spotify frontend developer. Don't forget attach the resume",
    new Date().setDate(new Date().getDate() + 5),
    'high'
  );

  taskController.addTask(
    "Check Slack 'last today' channel",
    "Check Slack 'last today' channel, pin an important comment",
    new Date().setDate(new Date().getDate() + 1)
  );

  taskController.setProject(secondProject);

  taskController.addTask(
    'Tickets to Soda Stereo in Quito',
    'Buy 2 VIP tickets to SS concert',
    new Date().setDate(new Date().getDate() + 6)
  );

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
