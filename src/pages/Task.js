import { taskElement } from '../components/task';

const findProject = (projectId, projectsArray) => {
  const project = projectsArray.find((elem) => elem.id === projectId);
  return project || false;
};

const getProject = (projectId, projectsArray) => {
  const project = findProject(projectId, projectsArray);
  return project;
};

const taskElements = (project) => {
  let tasksInnerHTML = '';
  project.tasks.forEach((element) => {
    tasksInnerHTML += taskElement(element);
  });

  return tasksInnerHTML;
};


const TaskPage = (projectId, projectsArray) => {
  const project = getProject(projectId, projectsArray);
  return `
  <h2 class="subtitle">${project.title.toUpperCase()} TASKS</h2>
  <div id="today" class="day-filter">
    <ul id="today-list" class="task-list">
    ${taskElements(project)} 
    </ul>
  </div>


  <!-- FAB BUTTON ADD TASK -->
  <div class="fas newTask"></div>
  <!-- TASK FORM -->
  <div id="formDiv" class="hidden">
    <div class="fas formBack">
      <div class="bar"></div>
    </div>
    <form id="taskForm" class="d-flex">
      <input type="text" name="title" id="task-title" placeholder="Task Title..." class="primary" />
      <p></p>
      <div class="priority-icons d-flex">
        <input type="radio" name="priority" value="low" hidden id="low-priority-checks"/>
        <label class="card" for="low-priority-checks">
          <div class="priority-icons-content">
            <img src="https://img.icons8.com/ios/32/000000/low-priority.png" alt="low" />
            <p>LOW</p>
          </div>
        </label>

        <input type="radio" name="priority" hidden value="medium"  id="medium-priority-checks" />
        <label class="card" for="medium-priority-checks">
          <div class="priority-icons-content">
            <img src="https://img.icons8.com/ios/32/000000/medium-priority.png" alt="medium" />
            <p>MEDIUM</p>
            
          </div>
        </label>
        <input type="radio" name="priority" hidden value="high"  id="high-priority-button"/>
        <label class="card" for="high-priority-button">
          <div class="priority-icons-content">
            <img src="https://img.icons8.com/ios/32/000000/high-priority.png" alt="high" />
            <p>HIGH</p>
          </div>
        </label>
      </div>
      <input type="date" id="date" autocomplete="off" class="secondary">
      <textarea name="description" id="task-description" cols="30" rows="3" placeholder="Description"></textarea>
      <!-- <input type="text" name="title" id="task-priority" placeholder="Priority..." class="secondary" /> -->

      <button id="add-task" class="primary-button">Save</button>
    </form>
  </div>

  <!-- TASK FORM -->
  <div id="taskInfoBack" class="hidden">
    <div class="fas formBack">
      <div class="bar"></div>
    </div>
    <ul class="taskInfo">

    </ul>
  </div>
`;
};

export default TaskPage;
