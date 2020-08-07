import ellipsisIcon from '../assets/ellipsis.svg';

const projectElement = (
  { id, title },
  numberItems,
  removeBottomClass = undefined,
) => `
          <div class="project-cards-item cards-data ${removeBottomClass}" data-id="${id}">
            <p class="project-title">${title}</p>
            <p class="project-subtitle">${numberItems} items</p>
            <div class="options-icon">
              <img src="${ellipsisIcon}" alt="ellipsis-icon">
            </div>
          </div>
  `;

export default projectElement;
