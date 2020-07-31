import addIcon from '../assets/plus.svg';
import projectElement from '../components/project';

const projectsElements = (projectsArray) => {
  let projectsInnerHTML = '';
  projectsArray.forEach((element, idx, array) => {
    const oddLastElem = array.length % 2 !== 0 && idx === array.length - 1;
    projectsInnerHTML += projectElement(
      element,
      element.tasks.length,
      oddLastElem && 'remove-bottom'
    );
  });
  return projectsInnerHTML;
};

const formElement = () => `
  <!-- FORM-CARDS -->
  <div class="form-cards d-none">
    <div class="navbar">
      <div class="navbar-content d-flex">
        <div class="arrow-back"><i class='fas fa-arrow-left'></i></div>
      </div>
    </div>
    <div class="form-cards-content">
      <form class="d-flex">
        <label for="title">Title</label>
        <input type="text" name="title" id="title" />
        <label for="title">Description</label>
        <textarea name="description" id="description" cols="30" rows="5"></textarea>
        <button id="add-project" class="primary-button">Create project/Edit</button>
        <button id="remove-project" class="secondary-button">Remove project</button>
      </form>
    </div>
  </div>
`;

const ProjectPage = (projectsArray) => `
<div class="projects">
  <!-- CARDS -->
  <div class="project-cards">
    <h1 class="title">My Projects</h1>
    <div class="project-cards-content">
    ${projectsElements(projectsArray)}  
      <div class="project-cards-item remove-bottom d-flex" id="add-button"><img src="${addIcon}"
          alt="plus-icon" id="plus-icon" />
      </div>
    </div>
  </div>
  ${formElement()}
</div>
`;
export default ProjectPage;
