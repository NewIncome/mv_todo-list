import ellipsisIcon from '../assets/ellipsis.svg';
import addIcon from '../assets/plus.svg';

const ProjectPage = () => `
<div class="projects">
  <!-- CARDS -->
  <div class="project-cards">
    <h1 class="title">My Projects</h1>
    <div class="project-cards-content">
      <div class="project-cards-item cards-data" data-id="1">
        <p class="project-title">all projects</p>
        <p class="project-subtitle">25 items</p>
        <div class="options-icon">
          <img src="${ellipsisIcon}" alt="ellipsis-icon">
        </div>
      </div>
      <div class="project-cards-item cards-data" data-id="2">
        <p class="project-title">all projects</p>
        <p class="project-subtitle">25 items</p>
        <div class="options-icon">
          <img src="${ellipsisIcon}" alt="ellipsis-icon">
        </div>
      </div>
      <div class="project-cards-item cards-data" data-id="3">
        <p class="project-title">all projects</p>
        <p class="project-subtitle">25 items</p>
        <div class="options-icon">
          <img src="${ellipsisIcon}" alt="ellipsis-icon">
        </div>
      </div>
      <div class="project-cards-item cards-data" data-id="4">
        <p class="project-title">all projects</p>
        <p class="project-subtitle">25 items</p>
        <div class="options-icon">
          <img src="${ellipsisIcon}" alt="ellipsis-icon">
        </div>
      </div>
      <div class="project-cards-item cards-data" data-id="5">
        <p class="project-title">all projects</p>
        <p class="project-subtitle">25 items</p>
        <div class="options-icon">
          <img src="${ellipsisIcon}" alt="ellipsis-icon">
        </div>
      </div>
      <div class="project-cards-item cards-data" data-id="6">
        <p class="project-title">all projects</p>
        <p class="project-subtitle">25 items</p>
        <div class="options-icon">
          <img src="${ellipsisIcon}" alt="ellipsis-icon">
        </div>
      </div>
      <!-- check w/ javascript if is odd number of projects add remove-bottom class the last child -->
      <div class="project-cards-item remove-bottom">
        <p class="project-title">all projects</p>
        <p class="project-subtitle">25 items</p>
        <div class="options-icon">
          <img src="${ellipsisIcon}" alt="ellipsis-icon">
        </div>
      </div>
      <div class="project-cards-item remove-bottom d-flex" id="add-button"><img src="${addIcon}"
          alt="plus-icon" id="plus-icon" />
      </div>
    </div>
  </div>

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
</div>
`;
export default ProjectPage;
