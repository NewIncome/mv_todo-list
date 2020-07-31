const initPageScript = () => {
  const cards = document.querySelector('.project-cards');
  const form = document.querySelector('.form-cards');
  const addButton = document.querySelector('#add-button');
  const backButton = document.querySelector('.arrow-back');
  const addProjectButton = document.querySelector('#add-project');
  const removeProjectButton = document.querySelector('#remove-project');
  const projectCardItems = document.querySelectorAll('.cards-data');
  const options = document.querySelectorAll('.options-icon');

  addButton.onclick = () => {
    cards.classList.add('d-none');
    form.classList.remove('d-none');
  };

  backButton.onclick = () => {
    cards.classList.remove('d-none');
    form.classList.add('d-none');
  };

  addProjectButton.onclick = (e) => {
    e.preventDefault();

    // add/edit projects
    // if saves
    cards.classList.remove('d-none');
    form.classList.add('d-none');
    // render
    // display a toast message
  };

  removeProjectButton.onclick = (e) => {
    e.preventDefault();
    console.log('remove project');
    // remove projects
    // if removes
    cards.classList.remove('d-none');
    form.classList.add('d-none');
    // render
    // display a toast message
  };

  projectCardItems.forEach((element, index) => {
    element.onclick = (event) => {
      const origin = event.srcElement || event.target;
      if (origin.tagName && origin.tagName.match(/div/i)) {
        // getting directly from the element
        console.log(event.target.getAttribute('data-id'));
        //  do things
      }
      if (origin.tagName && origin.tagName.match(/p/i)) {
        // getting directly from the element
        console.log('clicked children ', element.getAttribute('data-id'));
        //  do things
      }
    };
    options[index].onclick = () => {
      cards.classList.add('d-none');
      form.classList.remove('d-none');
      // display edit button and delete in form edit
    };
  });

  projectCardItems.forEach((element) => {
    element.addEventListener('long-press', (e) => {
      console.log('long press');
    });
  });
};

export default initPageScript;
