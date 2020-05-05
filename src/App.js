import React, { Fragment } from 'react';
import Navbar from './components/Layout/Navbar';
import Footer from './components/Layout/Footer';
import Login from './components/Login/Login';
import './App.css';

function App() {
  return (
    <Fragment>
      <Navbar />
      <section className='container'>
        <Login />
      </section>
      <Footer />
    </Fragment>
  );
}

export default App;
