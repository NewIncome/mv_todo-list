/* eslint-disable comma-dangle */
/* eslint-disable no-use-before-define */
/* eslint-disable no-restricted-globals, no-alert */
import TaskPage from '../pages/Task';
import { taskDetails } from '../components/task';
import projectController from '../controllers/project_controller';
import ProjectPage from '../pages/Project';
import taskController from '../controllers/task_controller';

let globalProjectId = 1;
let saveProjectFlagProjectForm = true;
let taskPriority;
let taskID;

const renderProjectPage = () => {
  const projectContainer = document.querySelector('.projects');
  projectContainer.innerHTML = '';
  const JSONProjects = JSON.parse(localStorage.getItem('Projects'));
  projectContainer.innerHTML = ProjectPage(JSONProjects);
  projectScript();
};

const renderTaskPage = (taskRenderProjectId) => {
  const taskContainer = document.querySelector('.tasks');
  taskContainer.innerHTML = '';
  const JSONProjects = JSON.parse(localStorage.getItem('Projects'));
  taskContainer.innerHTML = TaskPage(taskRenderProjectId, JSONProjects);
  taskScript();
};

const findProject = (projects, projectId) => {
  const project = projects.find((elem) => elem.id === projectId);
  return project || false;
};
const taskScript = () => {
  const bullets = document.querySelectorAll('.fa-circle');
  const editIcons = document.querySelectorAll('.fa-pencil-alt');
  const newTaskBttn = document.querySelector('.newTask');
  const formDiv = document.querySelector('#formDiv');
  const formBack = document.querySelector('.formBack');
  const addTaskButton = document.querySelector('#add-task');
  const tasks = document.querySelectorAll('.task');
  const taskInfo = document.querySelector('#taskInfoBack');
  const taskInfoUl = document.querySelector('.taskInfo');
  const priorityChecks = document.querySelectorAll('input[name=priority]');
  const taskFormTitle = document.querySelector('#task-title');
  const taskFormDescription = document.querySelector('#task-description');
  const taskFormDueDate = document.querySelector('#date');
  taskFormDueDate.valueAsDate = new Date();

  priorityChecks.forEach((element) => {
    element.onclick = (e) => {
      e.preventDefault();
      const priorityIconElement = element.nextElementSibling.firstElementChild.firstElementChild;

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
      const editIcon = bullet.parentElement.lastElementChild.className;
      const markIcon = bullet.parentElement.firstChild.className;
      const spanText = bullet.nextSibling.className;
      bullet.parentElement.lastElementChild.className = editIcon === 'fa fa-pencil-alt' ? 'fa fa-times-circle' : 'fa fa-pencil-alt';
      bullet.parentElement.firstChild.className = markIcon === 'far fa-circle' ? 'fas fa-check-circle' : 'far fa-circle';
      bullet.nextSibling.className = spanText === 'unscratched' ? 'scratched' : 'unscratched';
    };
  });

  const cleanInputs = () => {
    taskFormTitle.value = '';
    taskFormDescription.value = '';
    taskFormDueDate.valueAsDate = new Date();
    priorityChecks[0].checked = false;
    priorityChecks[1].checked = false;
    priorityChecks[2].checked = false;

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
  };

  newTaskBttn.onclick = () => {
    addTaskButton.innerHTML = 'Create Task';
    formDiv.className = 'unhidden';
    cleanInputs();
  };

  formBack.onclick = () => {
    formDiv.className = 'hidden';
  };

  const getTaskDetailData = (taskID) => {
    const task = findTaskObject(taskID);
    taskFormTitle.value = task.title;
    taskFormDescription.value = task.description;
    taskFormDueDate.value = task.dueDate.toString();

    if (task.priority === 'low') {
      priorityChecks[0].checked = true;
      taskPriority = task.priority;
    } else if (task.priority === 'medium') {
      priorityChecks[1].checked = true;
      taskPriority = task.priority;
    } else {
      priorityChecks[2].checked = true;
      taskPriority = task.priority;
    }

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
      priorityChecks[0].nextElementSibling.firstElementChild.firstElementChild.setAttribute(
        'src',
        'https://img.icons8.com/ios-filled/32/000000/low-priority.png'
      );
    } else if (priorityChecks[1].checked) {
      priorityChecks[1].nextElementSibling.firstElementChild.firstElementChild.setAttribute(
        'src',
        'https://img.icons8.com/ios-filled/32/000000/medium-priority.png'
      );
    } else {
      priorityChecks[2].nextElementSibling.firstElementChild.firstElementChild.setAttribute(
        'src',
        'https://img.icons8.com/ios-filled/32/000000/high-priority.png'
      );
    }
  };

  editIcons.forEach((editIcon) => {
    editIcon.onclick = () => {
      const projectObject = projectController.projects.find(
        (elem) => elem.getId() === globalProjectId
      );
      taskController.setProject(projectObject);

      taskID = editIcon.parentElement.getAttribute('data-id');
      if (editIcon.className === 'fa fa-pencil-alt') {
        addTaskButton.innerHTML = 'Edit Task';
        formDiv.className = 'unhidden';
        getTaskDetailData(taskID);
        return;
      }
      const decision = confirm('Are you sure you want to remove this task?');
      if (decision) {
        taskController.removeTask(+taskID);
        editIcon.parentElement.remove();
        renderProjectPage(); // render projects page
        renderTaskPage(globalProjectId); // render task page
      }
    };
  });

  addTaskButton.onclick = (e) => {
    e.preventDefault();
    const projectObject = projectController.projects.find(
      (elem) => elem.getId() === globalProjectId
    );
    taskController.setProject(projectObject);

    if (addTaskButton.innerHTML === 'Create Task') {
      const addedVal = taskController.addTask(
        taskFormTitle.value,
        taskFormDescription.value,
        taskFormDueDate.value,
        taskPriority
      );
      if (!addedVal) return;
    } else {
      const editedVal = taskController.editTask(
        +taskID,
        taskFormTitle.value,
        taskFormDescription.value,
        taskFormDueDate.value,
        taskPriority
      );
      if (!editedVal) return;
    }

    renderProjectPage();
    renderTaskPage(globalProjectId, false);
  };
};

/* PROJECT SCRIPT */

const projectScript = () => {
  let localProjectId;
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

  const cleanInputs = () => {
    projectTitleInput.value = '';
    projectDescriptionInput.value = '';
  };

  addButton.onclick = () => {
    cleanInputs();
    cards.classList.add('d-none');
    form.classList.remove('d-none');
    addProjectButton.innerHTML = 'Create project';
    removeProjectButton.classList.add('d-none');
    saveProjectFlagProjectForm = true;
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
      const projectEdited = projectController.editProject(
        localProjectId,
        projectTitleInput.value,
        projectDescriptionInput.value
      );
      if (!projectEdited) return;
    }
    renderProjectPage();
    cards.classList.remove('d-none');
    form.classList.add('d-none');
  };

  removeProjectButton.onclick = (e) => {
    e.preventDefault();
    const decision = confirm('Are you sure you want to remove this project?');
    if (decision) {
      projectController.removeProject(localProjectId);
      renderProjectPage(); // render projects page
      renderTaskPage(1); // render task page
      cards.classList.remove('d-none');
      form.classList.add('d-none');
    }
  };

  projectCardItems.forEach((element, index) => {
    element.onclick = (event) => {
      const origin = event.srcElement || event.target;
      if (origin.tagName && origin.tagName.match(/div/i)) {
        renderTaskPage(+event.target.getAttribute('data-id'));
        taskScript();
        globalProjectId = +event.target.getAttribute('data-id');
      }
      if (origin.tagName && origin.tagName.match(/p/i)) {
        renderTaskPage(+element.getAttribute('data-id'));
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
      const project = findProject(
        JSON.parse(localStorage.getItem('Projects')),
        +element.getAttribute('data-id')
      );

      projectTitleInput.value = project.title;
      projectDescriptionInput.value = project.description;
      localProjectId = +element.getAttribute('data-id');
    };
  });
};

export { projectScript, taskScript };
