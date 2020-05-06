import { ADD_TODO_LIST } from '../actions/types';

const initialState = [];

const todoListReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO_LIST:
      return [...state, action.payload];
    default:
      return state;
  }
};

export default todoListReducer;
