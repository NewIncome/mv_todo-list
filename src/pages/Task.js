import { taskElement } from '../components/task';

const findProject = (projectId, projectsArray) => {
  const project = projectsArray.find((elem) => elem.id === projectId);
  return project || false;
};

const taskElements = (projectId, projectsArray) => {
  const project = findProject(projectId, projectsArray);
  let tasksInnerHTML = '';
  project.tasks.forEach((element, idx, array) => {
    tasksInnerHTML += taskElement(element);
  });

  return tasksInnerHTML;
};

const TaskPage = (projectId, projectsArray) => `
<h2 class="subtitle">ALL TASKS</h2>
<div id="today" class="day-filter">
  <h3 class="subtitle">Today</h3>
  <ul id="today-list" class="task-list">
  ${taskElements(projectId, projectsArray)} 
  </ul>
</div>
<div id="tomorrow" class="day-filter">
  <h3 class="subtitle">Tomorrow</h3>
  <ul id="tomorrow-list" class="task-list">
  </ul>
</div>
<div id="upcoming" class="day-filter">
  <h3 class="subtitle">Upcoming</h3>
  <ul id="upcoming-list" class="task-list">
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
      <input type="radio" name="priority" value="1" hidden id="low-priority-checks"/>
      <label class="card" for="low-priority-checks">
        <div class="priority-icons-content">
          <img src="https://img.icons8.com/ios/32/000000/low-priority.png" alt="low" />
          <p>LOW</p>
        </div>
      </label>

      <input type="radio" name="priority" hidden value="2"  id="medium-priority-checks" />
      <label class="card" for="medium-priority-checks">
        <div class="priority-icons-content">
          <img src="https://img.icons8.com/ios/32/000000/medium-priority.png" alt="medium" />
          <p>MEDIUM</p>
          
        </div>
      </label>
      <input type="radio" name="priority" hidden value="3"  id="high-priority-button"/>
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

export default TaskPage;
