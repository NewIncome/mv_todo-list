const taskElement = ({ id, title }) => `
  <li class="task" data-id="${id}"><i class="far fa-circle">
    </i><span class="unscratched">${title}</span><i class="fa fa-pencil-alt" ></i>
  </li>
`;

const addClassPriority = (priority) => {
  switch (priority) {
    case 'low':
      return 'priority-low';
    case 'medium':
      return 'priority-medium';
    default:
      return 'priority-high';
  }
};

const taskDetails = (task) => `
<li class="taskInfo-li"><strong>Title:</strong><p>${task.title}</p></li>
<li class="taskInfo-li"><strong>Description:</strong><p>${task.description}</p></li>
<li class="taskInfo-li"><strong>Due date:</strong><p>${task.dueDate}</p></li>
<li class="taskInfo-li"><strong>Priority:</strong><p class="${addClassPriority(task.priority)}">${task.priority}</p></li>
`;

export { taskElement, taskDetails };
