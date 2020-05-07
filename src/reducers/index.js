import { combineReducers } from 'redux';
import userReducer from './user';
import todoListReducer from './todolist';
import todoListItemsReducer from './todolistitem';
import selectedTodoListReducer from './selectedTodoList';

const rootReducer = combineReducers({
  user: userReducer,
  todolists: todoListReducer,
  todoListItems: todoListItemsReducer,
  selectedTodoList: selectedTodoListReducer,
});

export default rootReducer;
