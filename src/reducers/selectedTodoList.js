import {
  SET_SELECTED_TODO_LIST,
  ADD_TO_SELECTED_TODO_LIST,
  DELETE_FROM_SELECTED_TODO_LIST,
  TOGGLE_SELECTED_TODO_LIST_ITEM,
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
    case DELETE_FROM_SELECTED_TODO_LIST:
      return {
        ...state,
        items: [...state.items].filter((item) => item._id !== action.payload),
      };
    case TOGGLE_SELECTED_TODO_LIST_ITEM:
      const copyItemsArr = [...state.items];
      copyItemsArr.splice(action.payload.index, 1, action.payload.todo);
      return {
        ...state,
        items: copyItemsArr,
      };
    default:
      return state;
  }
};

export default selectedTodoListReducer;
