import { SET_SELECTED_TODO_LIST } from '../actions/types';

const initialState = '';

const selectedTodoListReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SELECTED_TODO_LIST:
      return action.payload;
    default:
      return state;
  }
};

export default selectedTodoListReducer;
