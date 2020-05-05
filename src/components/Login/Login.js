import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

const Login = (props) => {
  return (
    <div className='Login'>
      <form>
        <h3>Log In</h3>
        <div>
          <label htmlFor='email'>Email:</label>
          <input type='email' id='email' />
        </div>
        <div>
          <label htmlFor='password'>Password:</label>
          <input type='password' id='password' />
        </div>
        <input type='submit' value='Login' />
        <div className='message'>
          <span>
            Don't have an account? Click <Link to='/signup'>here</Link> to sign
            up.
          </span>
        </div>
      </form>
    </div>
  );
};

export default Login;
