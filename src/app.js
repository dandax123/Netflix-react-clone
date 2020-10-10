import React from 'react';

import {BrowserRouter as Router, Switch} from 'react-router-dom';
import * as ROUTES from './constants/routes';
import {Home, Browse, SignUp, SignIn} from './pages/index';
import {useAuthListener} from './hooks/index';
import {IsUserRedirect, ProtectedRoute} from './helpers/routes'
export default function App() {
  var user = useAuthListener() ;
  user =  user.user == null ? null : user; 
  
  return (
    <Router>
      <Switch>
        <IsUserRedirect user={user} exact loggedInPath={ROUTES.BROWSE} path={ROUTES.SIGNIN}>
          <SignIn/>
        </IsUserRedirect>
        <IsUserRedirect user={user} exact loggedInPath={ROUTES.BROWSE} path={ROUTES.SIGNUP}>
          <SignUp/>
        </IsUserRedirect>
        <IsUserRedirect exact loggedInPath={ROUTES.BROWSE} path={ROUTES.HOME} user={user}>
          <Home/>
        </IsUserRedirect>
        <ProtectedRoute user={user} exact path={ROUTES.BROWSE}>
          <Browse/>
        </ProtectedRoute>
      </Switch>
    </Router>
  );
}

