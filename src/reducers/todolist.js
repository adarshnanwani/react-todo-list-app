import {
  ADD_TODO_LIST,
  DELETE_TODO_LIST,
  SET_ALL_TODO_LISTS,
} from '../actions/types';

const initialState = [];

const todoListReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ALL_TODO_LISTS:
      return [...action.payload];
    case ADD_TODO_LIST:
      return [...state, action.payload];
    case DELETE_TODO_LIST:
      return [...state].filter((list) => list._id !== action.payload);
    default:
      return state;
  }
};

export default todoListReducer;
