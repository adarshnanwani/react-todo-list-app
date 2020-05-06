import { ADD_TODO_LIST, DELETE_TODO_LIST } from './types';
import { v4 } from 'uuid';

export const addTodoList = (name) => (dispatch) => {
  const newTodoList = {
    name,
    createdDate: new Date(),
    _id: v4(),
  };
  dispatch({
    type: ADD_TODO_LIST,
    payload: newTodoList,
  });
};

export const deleteTodoList = (_id) => (dispatch) => {
  dispatch({
    type:DELETE_TODO_LIST,
    payload: _id
  })
}
