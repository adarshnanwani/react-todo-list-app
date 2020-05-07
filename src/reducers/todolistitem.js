import { ADD_TODO, DELETE_TODO } from '../actions/types';

const initialState = [];

const todoListItemsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload];
    case DELETE_TODO:
      return [...state].filter((todo) => todo._id !== action.payload);
    default:
      return state;
  }
};

export default todoListItemsReducer;
