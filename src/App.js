import React, { Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';
import Navbar from './components/Layout/Navbar';
import Footer from './components/Layout/Footer';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import './App.css';

function App() {
  return (
    <Fragment>
      <Navbar />
      <section className='container'>
        <Switch>
          <Route path='/' exact component={Login} />
          <Route path='/signup' component={Signup} />
          <Route path='/dashboard' component={() => <h4>Dashboard</h4>} />
        </Switch>
      </section>
      <Footer />
    </Fragment>
  );
}

export default App;
