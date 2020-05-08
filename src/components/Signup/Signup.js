import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { userSignUp } from '../../actions/user';
import useInput from '../../hooks/useInput';

import './Signup.css';

const Signup = (props) => {
  const [name, changeName, resetName] = useInput('');
  const [email, changeEmail, resetEmail] = useInput('');
  const [password, changePassword, resetPassword] = useInput('');
  const [cpassword, changeCpassword, resetCpassword] = useInput('');

  const [error, setError] = useState(false);

  const formSubmitHandler = (e) => {
    e.preventDefault();
    if (password !== cpassword) {
      setError(true);
    } else {
      props.userSignUp({
        name,
        email,
        password,
      });
      setError(false);
      resetName();
      resetEmail();
      resetPassword();
      resetCpassword();
    }
  };

  if (props.isAuthenticated) {
    return <Redirect to='/dashboard' />;
  }

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
        {error && (
          <div className='error-msg'>
            Password and Confirm Password do not match.
          </div>
        )}

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

const mapStateToProps = (state) => ({
  isAuthenticated: state.user.isAuthenticated,
});

export default connect(mapStateToProps, { userSignUp })(Signup);
