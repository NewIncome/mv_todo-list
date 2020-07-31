const initPageScript1 = (() => {
  const cards = document.querySelector('.project-cards');
  const form = document.querySelector('.form-cards');
  const main = document.getElementById('main');
  // const addButton = document.querySelector('#add-button');
  // const backButton = document.querySelector('.arrow-back');
  // const addProjectButton = document.querySelector('#add-project');
  // const removeProjectButton = document.querySelector('#remove-project');
  // const projectCardItems = document.querySelectorAll('.cards-data');
  // const options = document.querySelectorAll('.options-icon');

  const addButton = () => {
    console.log(form);
    console.log(cards);
    console.log(main);
    // cards.classList.add('d-none');
    // form.classList.remove('d-none');
  };

  
  return {
    addButton,
  };
})();

export default initPageScript1;
