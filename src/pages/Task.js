import taskController from '../controllers/task_controller';
import taskElement from '../components/task';

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
<div class="tasks">
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
        <div class="card">
          <div class="priority-icons-content">
            <img src="https://img.icons8.com/ios/32/000000/low-priority.png" alt="low" />
            <!-- low filled
        <img src="https://img.icons8.com/ios-filled/32/000000/low-priority.png"/> -->
            <p>LOW</p>
          </div>
        </div>

        <div class="card">
          <div class="priority-icons-content">
            <img src="https://img.icons8.com/ios/32/000000/medium-priority.png" alt="medium" />
            <!-- medium ios-filled
        <img src="https://img.icons8.com/ios-filled/32/000000/medium-priority.png"/> -->
            <p>MEDIUM</p>
          </div>
        </div>

        <div class="card">
          <div class="priority-icons-content">
            <img src="https://img.icons8.com/ios/32/000000/high-priority.png" alt="high" />
            <!-- high filled
        <img src="https://img.icons8.com/ios-filled/32/000000/high-priority.png"/> -->
            <p>HIGH</p>
          </div>
        </div>
      </div>
      <input type="date" id="date" autocomplete="off" class="secondary">
      <textarea name="description" id="task-description" cols="30" rows="3" placeholder="Description"></textarea>
      <!-- <input type="text" name="title" id="task-priority" placeholder="Priority..." class="secondary" /> -->

      <button id="add-task" class="primary-button">Save</button>
    </form>
  </div>
</div>
`;

export default TaskPage;
