import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import useInput from '../../hooks/useInput';
import { userLogin } from '../../actions/user';
import './Login.css';

const Login = (props) => {
  const [email, changeEmail, resetEmail] = useInput('');
  const [password, changePassword, resetPassword] = useInput('');

  const submitHandler = (e) => {
    e.preventDefault();
    console.log({
      email,
      password,
    });
    props.userLogin(email, password);
    resetEmail();
    resetPassword();
  };

  return (
    <div className='Login'>
      <form onSubmit={submitHandler}>
        <h3>Log In</h3>
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

export default connect(null, { userLogin })(Login);
