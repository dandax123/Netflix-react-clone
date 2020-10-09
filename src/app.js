import React from 'react';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import * as ROUTES from './constants/routes';
import {Home, Browse, SignUp, SignIn} from './pages/index';

export default function App() {
  return (
    <Router>
      <Route exact path={ROUTES.HOME}>
        <Home/>
      </Route>
      <Route exact path={ROUTES.SIGNIN}>
        <SignIn/>
      </Route>
      <Route exact path={ROUTES.SIGNUP}>
        <SignUp/>
      </Route>
      <Route exact path={ROUTES.BROWSE}>
        <Browse/>
      </Route>
    </Router>
  );
}

