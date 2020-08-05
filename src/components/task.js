const taskElement = ({ id, title }) => `
  <li class="task" data-id="${id}"><i class="far fa-circle">
    </i><span class="unscratched">${title}</span><i class="fa fa-pencil-alt" ></i>
  </li>
`;

const taskDetails = (task) => `
<li class="taskInfo-li"><bold>Title:</bold> ${task.title}</li>
<li class="taskInfo-li"><bold>Description:</bold> ${task.description}</li>
<li class="taskInfo-li"><bold>DueDate:</bold> ${task.dueDate}</li>
<li class="taskInfo-li"><bold>Priority:</bold> ${task.priority}</li>
`;

export { taskElement, taskDetails };
