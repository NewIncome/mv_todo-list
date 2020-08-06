/* eslint-disable no-restricted-globals, no-alert */
import TaskPage from '../pages/Task';
import task from '../components/task';
import { taskDetails } from '../components/task';
import projectController from '../controllers/project_controller';
import ProjectPage from '../pages/Project';
import taskController from '../controllers/task_controller';

let globalProjectId = 1;
let saveProjectFlagProjectForm = true;
let taskPriority;
let taskID;

const renderPage = (taskRenderProjectId = 0, projectPage = true) => {
  if (projectPage) {
    const projectContainer = document.querySelector('.projects');
    projectContainer.innerHTML = '';
    const JSONProjects = JSON.parse(localStorage.getItem('Projects'));
    projectContainer.innerHTML = ProjectPage(JSONProjects);
    return;
  }

  const taskContainer = document.querySelector('.tasks');
  taskContainer.innerHTML = '';
  const JSONProjects = JSON.parse(localStorage.getItem('Projects'));
  taskContainer.innerHTML = TaskPage(taskRenderProjectId, JSONProjects);
};

const taskScript = () => {
  // TASKS

  // const todayList = document.querySelector('#today-list');
  // const tomorrowList = document.querySelector('#tomorrow-list');
  // const upcomingList = document.querySelector('#upcoming-list');
  // const tasks = document.querySelectorAll('');
  const bullets = document.querySelectorAll('.fa-circle');
  const editIcons = document.querySelectorAll('.fa-pencil-alt');
  const newTaskBttn = document.querySelector('.newTask');
  const formDiv = document.querySelector('#formDiv');
  // const taskForm = document.querySelector('#taskForm');
  const formBack = document.querySelector('.formBack');
  const addTaskButton = document.querySelector('#add-task');
  const tasks = document.querySelectorAll('.task');
  const taskInfo = document.querySelector('#taskInfoBack');
  const taskInfoUl = document.querySelector('.taskInfo');
  const priorityChecks = document.querySelectorAll('input[name=priority]');
  const taskFormTitle = document.querySelector('#task-title');
  const taskFormDescription = document.querySelector('#task-description');
  const taskFormDueDate = document.querySelector('#date');

  priorityChecks.forEach((element) => {
    element.onclick = (e) => {
      e.preventDefault();
      const priorityIconElement =
        element.nextElementSibling.firstElementChild.firstElementChild;

      priorityChecks[0].nextElementSibling.firstElementChild.firstElementChild.setAttribute(
        'src',
        'https://img.icons8.com/ios/32/000000/low-priority.png'
      );
      priorityChecks[1].nextElementSibling.firstElementChild.firstElementChild.setAttribute(
        'src',
        'https://img.icons8.com/ios/32/000000/medium-priority.png'
      );
      priorityChecks[2].nextElementSibling.firstElementChild.firstElementChild.setAttribute(
        'src',
        'https://img.icons8.com/ios/32/000000/high-priority.png'
      );

      if (priorityChecks[0].checked) {
        priorityIconElement.setAttribute(
          'src',
          'https://img.icons8.com/ios-filled/32/000000/low-priority.png'
        );
      } else if (priorityChecks[1].checked) {
        priorityIconElement.setAttribute(
          'src',
          'https://img.icons8.com/ios-filled/32/000000/medium-priority.png'
        );
      } else {
        priorityIconElement.setAttribute(
          'src',
          'https://img.icons8.com/ios-filled/32/000000/high-priority.png'
        );
      }

      taskPriority = element.value;
    };
  });

  const findProject = (projects, projectId) => {
    const project = projects.find((elem) => elem.id === projectId);
    return project || false;
  };

  const findTask = (tasks, taskId) => {
    const foundTask = tasks.find((elem) => elem.id === +taskId);
    return foundTask || false;
  };

  const findTaskObject = (taskId) => {
    const project = findProject(
      JSON.parse(localStorage.getItem('Projects')),
      globalProjectId
    );
    const task = findTask(project.tasks, taskId);
    return task;
  };

  tasks.forEach((task) => {
    task.childNodes[1].onclick = () => {
      taskInfo.className = 'unhidden';
      taskInfoUl.innerHTML = taskDetails(
        findTaskObject(task.getAttribute('data-id'))
      );
    };
  });

  taskInfo.firstElementChild.onclick = () => {
    taskInfo.className = 'hidden';
  };

  bullets.forEach((bullet) => {
    bullet.onclick = () => {
      // console.log(bullet.getAttribute('data-id'));
      const editIcon = bullet.parentElement.lastElementChild.className;
      const markIcon = bullet.parentElement.firstChild.className;
      const spanText = bullet.nextSibling.className;
      // console.log(editIcon === 'fa fa-pencil-alt');
      // console.log(editIcon === 'fa fa-pencil-alt' ? 'fa fa-times-circle' : 'fa fa-pencil-alt');
      bullet.parentElement.lastElementChild.className =
        editIcon === 'fa fa-pencil-alt'
          ? 'fa fa-times-circle'
          : 'fa fa-pencil-alt';
      bullet.parentElement.firstChild.className =
        markIcon === 'far fa-circle' ? 'fas fa-check-circle' : 'far fa-circle';
      bullet.nextSibling.className =
        spanText === 'unscratched' ? 'scratched' : 'unscratched';
    };
  });

  newTaskBttn.onclick = () => {
    addTaskButton.innerHTML = 'Create Task';
    formDiv.className = 'unhidden';
  };

  formBack.onclick = () => {
    formDiv.className = 'hidden';
  };

  editIcons.forEach((editIcon) => {
    editIcon.onclick = () => {
      const projectObject = projectController.projects.find((elem) => elem.getId() === globalProjectId);
      taskController.setProject(projectObject);

      console.log(editIcon.className);
      if (editIcon.className === 'fa fa-pencil-alt') {
        addTaskButton.innerHTML = 'Edit Task';
        formDiv.className = 'unhidden';
        taskID = editIcon.parentElement.getAttribute('data-id');
      } else {
        // editIcon.onclick;
        const decision = confirm('Are you sure you want to remove this task?');
        if (decision) {
          taskController.removeTask(taskID);
          editIcon.parentElement.remove();
        }
      }
    };
  });

  addTaskButton.onclick = (e) => {
    e.preventDefault();

    const projectObject = projectController.projects.find((elem) => elem.getId() === globalProjectId);
    taskController.setProject(projectObject);

    console.log('project Object');
    console.log(projectObject);
    console.log(globalProjectId);
    console.log(projectController.projects);
    if (addTaskButton.innerHTML === 'Create Task') {
      // create
      const addedVal = taskController.addTask(
        taskFormTitle.value,
        taskFormDescription.value,
        taskFormDueDate.value,
        taskPriority,
      );
      if (!addedVal) return;
    } else {
      // edit
      const editedVal = taskController.editTask(
        taskID,
        taskFormTitle.value,
        taskFormDescription.value,
        taskFormDueDate.value,
        taskPriority,
      );
      if (!editedVal) return;
    }
    renderPage(globalProjectId, false);
    taskScript();
  };
};

const projectScript = () => {
  const cards = document.querySelector('.project-cards');
  const form = document.querySelector('.form-cards');
  const addButton = document.querySelector('#add-button');
  const backButton = document.querySelector('.arrow-back');
  const addProjectButton = document.querySelector('#add-project');
  const removeProjectButton = document.querySelector('#remove-project');
  const projectCardItems = document.querySelectorAll('.cards-data');
  const options = document.querySelectorAll('.options-icon');
  const projectTitleInput = document.querySelector('#project-title');
  const projectDescriptionInput = document.querySelector(
    '#project-description'
  );

  addButton.onclick = () => {
    cards.classList.add('d-none');
    form.classList.remove('d-none');
    addProjectButton.innerHTML = 'Create project';
    removeProjectButton.classList.add('d-none');
  };

  backButton.onclick = () => {
    cards.classList.remove('d-none');
    form.classList.add('d-none');
  };

  addProjectButton.onclick = (e) => {
    e.preventDefault();
    if (saveProjectFlagProjectForm) {
      const savedValue = projectController.addProject(
        projectTitleInput.value,
        projectDescriptionInput.value
      );
      if (!savedValue) return;
    } else {
      console.log('project edit');
    }
    renderPage();
    cards.classList.remove('d-none');
    form.classList.add('d-none');
    projectScript();

    // add/edit projects

    // display a toast message
  };

  removeProjectButton.onclick = (e) => {
    e.preventDefault();
    console.log('remove project');
    // remove projects
    // if removes
    cards.classList.remove('d-none');
    form.classList.add('d-none');
    // render
    // display a toast message
  };

  projectCardItems.forEach((element, index) => {
    element.onclick = (event) => {
      const origin = event.srcElement || event.target;
      if (origin.tagName && origin.tagName.match(/div/i)) {
        // getting directly from the element
        console.log(event.target.getAttribute('data-id'));
        //  do things
        renderPage(+event.target.getAttribute('data-id'), false);
        taskScript();
        globalProjectId = +event.target.getAttribute('data-id');
      }
      if (origin.tagName && origin.tagName.match(/p/i)) {
        // getting directly from the element
        console.log('clicked children ', element.getAttribute('data-id'));
        //  do things
        renderPage(+element.getAttribute('data-id'), false);
        taskScript();
        globalProjectId = +element.getAttribute('data-id');
      }
    };
    options[index].onclick = () => {
      cards.classList.add('d-none');
      form.classList.remove('d-none');
      // display edit button and delete in form edit
      addProjectButton.innerHTML = 'Edit project';
      if (removeProjectButton) removeProjectButton.classList.remove('d-none');
      saveProjectFlagProjectForm = false;
    };
  });
};

export { projectScript, taskScript };
