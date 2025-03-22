/* @refresh reload */
import 'bootstrap/scss/bootstrap.scss';

import { render } from 'solid-js/web';
import { Router, Route } from "@solidjs/router"

import './index.scss';

import App from './App';
import OtherPage from './pages/OtherPage';

const root = document.getElementById('root');
import { BASE } from './Constants';
import Landing from './pages/Landing';

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
    'Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?',
  );
}

render(() => 
      <Router>
           <Route path={BASE} component={App}>
               <Route path={`/`}component={Landing}/>
               <Route path={`/other`}component={OtherPage}/>
          </Route>
      </Router>

, root!);
