import TaskPage from '../pages/Task';
import task from '../components/task';
import { taskDetails } from '../components/task';
import projectController from '../controllers/project_controller';
import ProjectPage from '../pages/Project';

let globalProjectId = 1;
let saveProjectFlagProjectForm = true;

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
  const editTaskBttn = document.querySelector('#add-task');
  const tasks = document.querySelectorAll('.task');
  const taskInfo = document.querySelector('#taskInfoBack');

  const findProject = (projects, projectId) => {
    console.log(projects, projectId);
    const project = projects.find((elem) => elem.id === projectId);
    return project || false;
  };

  const findTask = (tasks, taskId) => {
    const foundTask = tasks.find((elem) => elem.id === taskId);
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
      // taskInfo.className = 'unhidden';
      const formTaskDetails = `
        <!-- TASK FORM -->
        <div id="taskInfoBack">
          <div class="fas formBack">
            <div class="bar"></div>
          </div>
          <ul class="taskInfo">
            ${taskDetails(findTaskObject(task.getAttribute('data-id')))}
          </ul>
        </div>
      `;
      document.querySelector('.tasks').innerHTML += formTaskDetails;
      const taskInfo = document.querySelector('#taskInfoBack');
      taskInfo.firstElementChild.onclick = () => {
        taskInfo.className = 'hidden';
      };
    };
  });

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
    editTaskBttn.innerHTML = 'Create Task';
    formDiv.className = 'unhidden';
  };

  formBack.onclick = () => {
    formDiv.className = 'hidden';
  };

  editIcons.forEach((editIcon) => {
    editIcon.onclick = () => {
      console.log(editIcon.className);
      if (editIcon.className === 'fa fa-pencil-alt') {
        editTaskBttn.innerHTML = 'Edit Task';
        formDiv.className = 'unhidden';
      } else {
        // editIcon.onclick;
        const decision = prompt('Are you sure you want to remove this task?');
        if (decision != null) editIcon.parentElement.remove();
      }
    };
  });
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
