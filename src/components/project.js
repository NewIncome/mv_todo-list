import ellipsisIcon from '../assets/ellipsis.svg';

const projectElement = (
  { getId, getTitle },
  numberItems,
  removeBottomClass = undefined
) => `
          <div class="project-cards-item cards-data ${removeBottomClass}" data-id="${getId()}">
            <p class="project-title">${getTitle()}</p>
            <p class="project-subtitle">${numberItems} items</p>
            <div class="options-icon">
              <img src="${ellipsisIcon}" alt="ellipsis-icon">
            </div>
          </div>
  `;

export default projectElement;
