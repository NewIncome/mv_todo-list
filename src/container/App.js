import 'css-reset-and-normalize';
import '../styles/style.css';
import ProjectPage from '../pages/Project';
// import Tasks from '../pages/Task';

const App = () => {
  const main = document.createElement('main');
  main.innerHTML = ProjectPage();
  // main.append(Projects());
  // main.append(Tasks);

  return main;
};

export default App;
