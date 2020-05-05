import React, { Fragment } from 'react';
import Navbar from './components/Layout/Navbar';
import Footer from './components/Layout/Footer';
import './App.css';

function App() {
  return (
    <Fragment>
      <Navbar />
      <section className='container'></section>
      <Footer />
    </Fragment>
  );
}

export default App;
