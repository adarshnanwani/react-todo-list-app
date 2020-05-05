import React from 'react';
import { Link } from 'react-router-dom';
import './Signup.css';

const Signup = () => {
  return (
    <div className='Signup'>
      <form>
        <h3>Sign Up</h3>
        <div>
          <label htmlFor='name'>Name:</label>
          <input type='text' id='name' />
        </div>
        <div>
          <label htmlFor='email'>Email:</label>
          <input type='email' id='email' />
        </div>
        <div>
          <label htmlFor='password'>Password:</label>
          <input type='password' id='password' />
        </div>
        <div>
          <label htmlFor='cpassword'>Confirm Password:</label>
          <input type='password' id='cpassword' />
        </div>
        <input type='submit' value='Signup' />
        <div className='message'>
          <span>
            Already have an account? Click <Link to='/'>here</Link> to login.
          </span>
        </div>
      </form>
    </div>
  );
};

export default Signup;
