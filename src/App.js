import React, { Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';
import PrivateRoute from './components/routing/PrivateRoute';
import Navbar from './components/Layout/Navbar';
import Footer from './components/Layout/Footer';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import Dashboard from './components/Dashboard/Dashboard';
import TodoList from './components/TodoList/TodoList';
import store from './store';
import { authenticateUser } from './actions/user';
import './App.css';

function App() {
  if (localStorage.token) {
    store.dispatch(authenticateUser(localStorage.token));
  }
  return (
    <Fragment>
      <Navbar />
      <section className='container'>
        <Switch>
          <Route path='/' exact component={Login} />
          <Route path='/signup' component={Signup} />
          <PrivateRoute path='/dashboard' component={Dashboard} />
          <PrivateRoute path='/todolist/:todoListId' component={TodoList} />
        </Switch>
      </section>
      <Footer />
    </Fragment>
  );
}

export default App;
