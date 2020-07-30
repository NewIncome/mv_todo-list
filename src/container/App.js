import 'css-reset-and-normalize';
import '../styles/style.css';
import Projects from '../pages/Projects';
// import Tasks from '../pages/Task';

const App = () => {
  const main = document.createElement('main');
  main.innerHTML = Projects();
  // main.append(Projects());
  // main.append(Tasks);

  return main;
};

export default App;
