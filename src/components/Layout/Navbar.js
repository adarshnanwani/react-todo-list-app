import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logoutUser } from '../../actions/user';

const Navbar = (props) => {
  const publicLinks = (
    <Fragment>
      <li>
        <Link to='/'>Login</Link>
      </li>
      <li>
        <Link to='/signup'>Signup</Link>
      </li>
    </Fragment>
  );

  const privateLinks = (
    <Fragment>
      <li>
        <a href='#!' role='button' onClick={() => props.logoutUser()}>
          Logout
        </a>
      </li>
    </Fragment>
  );

  return (
    <nav className='navbar'>
      <h2 className='site-name'>
        <Link to='/'>React Todo List</Link>
      </h2>
      <ul>{props.isAuth ? privateLinks : publicLinks}</ul>
    </nav>
  );
};

const mapStateToProps = (state) => ({
  isAuth: state.user.isAuthenticated,
});

export default connect(mapStateToProps, { logoutUser })(Navbar);
