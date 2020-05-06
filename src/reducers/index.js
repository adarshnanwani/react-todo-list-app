import { combineReducers } from 'redux';
import userReducer from './user';
import todoListReducer from './todolist';

const rootReducer = combineReducers({
  user: userReducer,
  todolists: todoListReducer,
});

export default rootReducer;
