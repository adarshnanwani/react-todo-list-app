import {
  SET_SELECTED_TODO_LIST,
  ADD_TO_SELECTED_TODO_LIST,
} from '../actions/types';

const initialState = {
  id: '1',
  items: [
    {
      _id: '3',
      text: 'Code for an hour',
      completed: false,
      createdDate: new Date(),
      todoListId: 1,
    },
    {
      _id: '4',
      text: 'Build an app',
      completed: true,
      createdDate: new Date(),
      todoListId: 1,
    },
  ],
};

const selectedTodoListReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SELECTED_TODO_LIST:
      return action.payload;
    case ADD_TO_SELECTED_TODO_LIST:
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    default:
      return state;
  }
};

export default selectedTodoListReducer;
