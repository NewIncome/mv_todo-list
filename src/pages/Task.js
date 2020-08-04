const TaskPage = () => `
<div class="tasks">
  <h2 class="subtitle">ALL TASKS</h2>
  <div id="today" class="day-filter">
    <h3 class="subtitle">Today</h3>
    <ul id="today-list" class="task-list">
      <li class="task"><i class="far fa-circle" data-id="1"></i><span class="unscratched">task for x day to be
          done</span><i class="fa fa-pencil-alt" data-id="1"></i></li>
      <li class="task"><i class="far fa-circle" data-id="2"></i><span class="unscratched">task for x day to be
          done</span><i class="fa fa-pencil-alt" data-id="2"></i></li>
      <li class="task"><i class="far fa-circle" data-id="3"></i><span class="unscratched">task for x day to be
          done</span><i class="fa fa-pencil-alt" data-id="3"></i></li>
      <li class="task"><i class="far fa-circle" data-id="1"></i><span class="unscratched">task for x day to be
          done</span><i class="fa fa-pencil-alt" data-id="1"></i></li>
      <li class="task"><i class="far fa-circle" data-id="2"></i><span class="unscratched">task for x day to be
          done</span><i class="fa fa-pencil-alt" data-id="2"></i></li>
      <li class="task"><i class="far fa-circle" data-id="3"></i><span class="unscratched">task for x day to be
          done</span><i class="fa fa-pencil-alt" data-id="3"></i></li>
      <li class="task"><i class="far fa-circle" data-id="1"></i><span class="unscratched">task for x day to be
          done</span><i class="fa fa-pencil-alt" data-id="1"></i></li>
      <li class="task"><i class="far fa-circle" data-id="2"></i><span class="unscratched">task for x day to be
          done</span><i class="fa fa-pencil-alt" data-id="2"></i></li>
      <li class="task"><i class="far fa-circle" data-id="3"></i><span class="unscratched">task for x day to be
          done</span><i class="fa fa-pencil-alt" data-id="3"></i></li>
      <li class="task"><i class="far fa-circle" data-id="1"></i><span class="unscratched">task for x day to be
          done</span><i class="fa fa-pencil-alt" data-id="1"></i></li>
      <li class="task"><i class="far fa-circle" data-id="2"></i><span class="unscratched">task for x day to be
          done</span><i class="fa fa-pencil-alt" data-id="2"></i></li>
      <li class="task"><i class="far fa-circle" data-id="3"></i><span class="unscratched">task for x day to be
          done</span><i class="fa fa-pencil-alt" data-id="3"></i></li>
    </ul>
  </div>
  <div id="tomorrow" class="day-filter">
    <h3 class="subtitle">Tomorrow</h3>
    <ul id="tomorrow-list" class="task-list">
      <li class="task"><i class="far fa-circle" data-id="4"></i><span class="unscratched">task for x day to be
          done</span><i class="fa fa-pencil-alt" data-id="4"></i></li>
      <li class="task"><i class="far fa-circle" data-id="5"></i><span class="unscratched">task for x day to be
          done</span><i class="fa fa-pencil-alt" data-id="5"></i></li>
    </ul>
  </div>
  <div id="upcoming" class="day-filter">
    <h3 class="subtitle">Upcoming</h3>
    <ul id="upcoming-list" class="task-list">
      <li class="task"><i class="far fa-circle" data-id="6"></i><span class="unscratched">task for x day to be
          done</span><i class="fa fa-pencil-alt" data-id="6"></i></li>
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
