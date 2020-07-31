import 'css-reset-and-normalize';
import '../styles/style.css';
import ProjectPage from '../pages/Project';
// import Tasks from '../pages/Task';
import projectsJSON from '../assets/projects.json';

const initProjectObject = () => {
  const projectObjects = projectsJSON;

  localStorage.setItem('Projects', JSON.stringify(projectObjects));
};
const App = () => {
  const main = document.createElement('main');
  main.setAttribute('id', 'main');
  initProjectObject();
  const projectsLocalStorage = JSON.parse(localStorage.getItem('Projects'));

  main.innerHTML = ProjectPage(projectsLocalStorage);
  // main.innerHTML = TaskPage(projectsLocalStorage.task);
  document.onreadystatechange = () => {
    if (document.readyState === 'complete') {
      // document ready

      const cards = document.querySelector('.project-cards');
      const form = document.querySelector('.form-cards');
      const addButton = document.querySelector('#add-button');
      addButton.onclick = () => {
        cards.classList.add('d-none');
        form.classList.remove('d-none');
      };
    }
  };
  return main;
};

export default App;
