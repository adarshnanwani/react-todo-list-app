import { combineReducers } from 'redux';
import userReducer from './user';
import todoListReducer from './todolist';
import todoListItemsReducer from './todolistitem';

const rootReducer = combineReducers({
  user: userReducer,
  todolists: todoListReducer,
  todoListItems: todoListItemsReducer,
});

export default rootReducer;
