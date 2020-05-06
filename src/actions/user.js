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

export const userSignUp = (dispatch) => {
  dispatch({
    type: SIGN_UP_SUCCESS,
    token: '43524435ewrfdsgsafsdfas',
  });
};

export const userLogin = (dispatch) => {
  dispatch({
    type: LOGIN_SUCCESS,
    token: '43524435ewrfdsgsafsdfas',
  });
};

export const loadUser = (dispatch) => {
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
