import React from 'react';
import { Link } from 'react-router-dom';
import useInput from '../../hooks/useInput';

import './Signup.css';

const Signup = () => {
  const [name, changeName, resetName] = useInput('');
  const [email, changeEmail, resetEmail] = useInput('');
  const [password, changePassword, resetPassword] = useInput('');
  const [cpassword, changeCpassword, resetCpassword] = useInput('');

  const formSubmitHandler = (e) => {
    e.preventDefault();
    console.log({
      name,
      email,
      password,
      cpassword,
    });
    resetName();
    resetEmail();
    resetPassword();
    resetCpassword();
  };

  return (
    <div className='Signup'>
      <form onSubmit={formSubmitHandler}>
        <h3>Sign Up</h3>
        <div>
          <label htmlFor='name'>Name:</label>
          <input type='text' id='name' value={name} onChange={changeName} />
        </div>
        <div>
          <label htmlFor='email'>Email:</label>
          <input type='email' id='email' value={email} onChange={changeEmail} />
        </div>
        <div>
          <label htmlFor='password'>Password:</label>
          <input
            type='password'
            id='password'
            value={password}
            onChange={changePassword}
          />
        </div>
        <div>
          <label htmlFor='cpassword'>Confirm Password:</label>
          <input
            type='password'
            id='cpassword'
            value={cpassword}
            onChange={changeCpassword}
          />
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
