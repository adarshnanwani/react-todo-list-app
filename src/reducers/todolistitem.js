import {
  ADD_TODO,
  DELETE_TODO,
  TOGGLE_TODO,
  UPDATE_TODO,
  DELETE_TODOS_FROM_A_TODO_LIST,
  SET_ALL_ITEMS_FOR_A_USER,
} from '../actions/types';

const initialState = [];

const todoListItemsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ALL_ITEMS_FOR_A_USER:
      return [...action.payload];
    case ADD_TODO:
      return [...state, action.payload];
    case DELETE_TODO:
      return [...state].filter((todo) => todo._id !== action.payload);
    case DELETE_TODOS_FROM_A_TODO_LIST:
      return [...state].filter((todo) => todo.todolist !== action.payload);
    case TOGGLE_TODO:
    case UPDATE_TODO:
      const copyState = [...state];
      copyState.splice(action.payload.index, 1, action.payload.todo);
      return copyState;
    default:
      return state;
  }
};

export default todoListItemsReducer;
