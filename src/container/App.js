import 'css-reset-and-normalize';
import '../styles/style.css';
import ProjectPage from '../pages/Project';
import projectController from '../controllers/project_controller';
import taskController from '../controllers/task_controller';
// import Tasks from '../pages/Task';

const initProjectObject = () => {
  const firstProject = projectController.addProject(
    'Work',
    'First projects description'
  );

  taskController.setProject(firstProject);

  const firstTask = taskController.addTask(
    '1stTask Title',
    'First jobs description',
    new Date(2020, 6, 30),
    'high'
  );
  const secondTask = taskController.addTask(
    '2stTask Title ',
    'Second  jobs description for the first project',
    new Date(2020, 6, 29)
  );

  const secondProject = projectController.addProject(
    'Frontend',
    'Second projects description'
  );

  taskController.setProject(secondProject);
  const thirdTask = taskController.addTask(
    '2stTask Title ',
    'Second  jobs description for the first project',
    new Date(2020, 6, 4)
  );
};

const App = () => {
  const main = document.createElement('main');
  initProjectObject();
  main.innerHTML = ProjectPage(projectController.projects);
  // main.append(Projects());
  // main.append(Tasks);

  return main;
};

export default App;
