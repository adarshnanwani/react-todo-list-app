import React from 'react';
import './Login.css';

const Login = (props) => {
  return (
    <div className='Login'>
      <form>
        <div>
          <label htmlFor='email'>Email:</label>
          <input type='email' id='email' />
        </div>
        <div>
          <label htmlFor='password'>Password:</label>
          <input type='password' id='password' />
        </div>
        <input type='submit' value='Login' />
      </form>
    </div>
  );
};

export default Login;
