import axios from '../axiosInstance';

import {
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  SIGN_UP_FAIL,
  SIGN_UP_SUCCESS,
  CHANGE_PASSWORD,
  RESET_PASSWORD,
  GET_USER_DATA,
  SET_USER_DATA,
  LOGOUT,
} from './types';

export const userSignUp = (user) => async (dispatch) => {
  try {
    const res = await axios.post('/auth/register', user);
    dispatch({
      type: SIGN_UP_SUCCESS,
      payload: res.data.token,
    });
    // Get user data now that we have got the token
    dispatch(loadUser());
  } catch (err) {
    console.log(err);
    dispatch({
      type: SIGN_UP_FAIL,
    });
  }
};

export const userLogin = (email, password) => async (dispatch) => {
  try {
    const res = await axios.post('/auth/login', { email, password });
    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data.token,
    });
    // Get user data now that we have got the token
    dispatch(loadUser());
  } catch (err) {
    console.log(err);
    dispatch({
      type: LOGIN_FAIL,
    });
  }
};

export const authenticateUser = (token) => (dispatch) => {
  dispatch({
    type: LOGIN_SUCCESS,
    payload: token,
  });
};

export const loadUser = () => async (dispatch) => {
  try {
    dispatch({
      type: GET_USER_DATA,
    });
    const res = await axios.get('/auth/me');
    console.log(res);
    const user = res.data.data;
    dispatch({
      type: SET_USER_DATA,
      payload: {
        name: user.name,
        email: user.email,
        _id: user._id,
        defaultList: user.defaultList,
      },
    });
  } catch (err) {
    console.log(err);
  }
};

export const logoutUser = () => (dispatch) => {
  dispatch({ type: LOGOUT });
};
