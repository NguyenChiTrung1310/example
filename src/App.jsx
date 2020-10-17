/* eslint-disable linebreak-style */
import React from 'react';
import './App.scss';
import 'react-toastify/dist/ReactToastify.css';
import {LoginPage, RegisterPage, ErrorPage, HomePage, NewsPage, ContactPage} from './pages/index';
import { Route, Switch} from 'react-router-dom';  
import {LOGIN_PAGE, REGISTER_PAGE, HOME_PAGE, NEWS_PAGE, CONTACT_PAGE} from './constants/constant';
import AppBar from './components/AppBar/AppBar';
function App() {
  return (
    <div className='App'>
      <AppBar />
      <Switch> 
        
        <Route
          component={LoginPage}
          exact
          path={LOGIN_PAGE}
        />
        <Route
          component={RegisterPage}
          exact
          path={REGISTER_PAGE}
        />
        <Route
          component={HomePage}
          exact
          path={HOME_PAGE}
        />
        <Route
          component={NewsPage}
          exact
          path={NEWS_PAGE}
        />
        <Route
          component={ContactPage}
          exact
          path={CONTACT_PAGE}
        />
        <Route
          component={ErrorPage}
        />
      </Switch>
    </div>
  );
}

export default App;
