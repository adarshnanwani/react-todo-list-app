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

export const loadUser = () => (dispatch) => {
  dispatch({
    type: GET_USER_DATA,
  });
  dispatch({
    type: SET_USER_DATA,
    payload: {
      name: 'John Doe',
      email: 'john@gmail.com',
      _id: 'fsadasefdxz5678',
      defaultList: 'tryewrqetrs432',
    },
  });
};
