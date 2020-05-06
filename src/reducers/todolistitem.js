import { ADD_TODO } from '../actions/types';

const initialState = [];

const todoListItemsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload];
    default:
      return state;
  }
};

export default todoListItemsReducer;
