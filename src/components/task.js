const taskElement = ({ id, title }) => `
  <li class="task"><i class="far fa-circle" data-id="${id}">
    </i><span class="unscratched">${title}</span><i class="fa fa-pencil-alt" data="${id}"></i>
  </li>
`;

const taskDetails = (task) => `
  task.getTitle
`;

export default { taskElement, taskDetails };
