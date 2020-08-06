import 'css-reset-and-normalize';
import '../styles/style.css';
import ProjectPage from '../pages/Project';
import TaskPage from '../pages/Task';
import taskController from '../controllers/task_controller';
import projectController from '../controllers/project_controller';
import Project from '../model/project';
import Task from '../model/task';

const makeProjectObject = (JSONProjects) => {
  JSONProjects.forEach((element) => {
    const project = Project(element.title, element.description);
    projectController.projects.push(project);
    element.tasks.forEach((task) => {
      const newTask = Task(
        task.title,
        task.description,
        task.dueDate,
        task.priority
      );
      project.setTasks(newTask);
    });
  });
};

const initProjectObject = () => {
  if (!localStorage.hasOwnProperty('Projects')) {
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
  } else makeProjectObject(JSON.parse(localStorage.getItem('Projects')));
};

const App = () => {
  const main = document.createElement('main');
  main.setAttribute('id', 'main');
  initProjectObject();
  const JSONProjects = JSON.parse(localStorage.getItem('Projects'));
  // projectController.projects = [...JSONProjects];
  // console.log(projectController.projects);
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
