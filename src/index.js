import App from './container/App';
import { projectScript, taskScript } from './functions/initPageScript';


document.getElementById('content').appendChild(App());
projectScript();
taskScript();
