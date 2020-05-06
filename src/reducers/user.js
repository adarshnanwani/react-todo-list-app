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
} from '../actions/types';

const initialState = {
  user: null,
  loading: true,
  isAuthenticated: null,
  token: null,
};

function userReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_SUCCESS:
    case SIGN_UP_SUCCESS:
      return {
        ...state,
        loading: false,
        isAuthenticated: true,
        token: action.payload,
      };
    case LOGIN_FAIL:
    case SIGN_UP_FAIL:
      return {
        ...state,
        loading: false,
        isAuthenticated: false,
        user: null,
        token: null,
      };
    case GET_USER_DATA:
      return {
        ...state,
        loading: true,
      };
    case SET_USER_DATA:
      return {
        ...state,
        loading: false,
        user: action.payload,
      };
    case LOGOUT:
      return {
        user: null,
        loading: false,
        isAuthenticated: null,
        token: null,
      };
    default:
      return state;
  }
}

export default userReducer;
