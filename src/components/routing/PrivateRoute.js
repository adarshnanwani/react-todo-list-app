import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = (props) => {
  const { isAuth, component: Component, ...rest } = props;
  return (
    <Route
      {...rest}
      render={(props) =>
        isAuth ? <Component {...props} /> : <Redirect to='/' />
      }
    />
  );
};

const mapStateToProps = (state) => ({
  isAuth: state.user.isAuthenticated,
});

export default connect(mapStateToProps)(PrivateRoute);
