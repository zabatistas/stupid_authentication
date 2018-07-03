import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import SignUp from './SignUp';
import UserList from './UserList';
import Menu from './Menu';
import { connectedRouterRedirect } from 'redux-auth-wrapper/history4/redirect'
import localStorageHasItem from '../utils/localStorage/hasItem';
import store from '../store';

const userNotLoggedIn = connectedRouterRedirect({
  redirectPath: '/login',
  authenticatedSelector: () => store.getState().user.isLoggedIn,
  wrapperDisplayName: 'userNotLoggedIn'
})

const userLoggedIn = connectedRouterRedirect({
  redirectPath: '/menu',
  authenticatedSelector: () => !store.getState().user.isLoggedIn,
  wrapperDisplayName: 'userLoggedIn'
})

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={userNotLoggedIn(Home)} />
      <Route exact path='/login' render={() => <Login className="LoginForm"/>} />
      <Route exact path='/signup' component={userLoggedIn(SignUp)} />
      <Route exact path='/menu' component={userNotLoggedIn(Menu)} />
      <Route exact path='/friends' component={userLoggedIn(UserList)} />
    </Switch>
  </main>
)

  export default Main;