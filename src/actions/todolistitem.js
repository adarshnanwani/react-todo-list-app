import { v4 } from 'uuid';
import { ADD_TODO, DELETE_TODO } from './types';
import {
  addToSelectedTodoList,
  deleteFromSelectedTodoList,
} from './selectedTodoList';

export const addTodo = (text, todoListId) => (dispatch, getState) => {
  const newTodo = {
    text,
    completed: false,
    _id: v4(),
    createdDate: new Date(),
    todoListId,
  };
  dispatch({
    type: ADD_TODO,
    payload: newTodo,
  });
  if (getState().selectedTodoList.id === todoListId) {
    dispatch(addToSelectedTodoList(newTodo));
  }
};

export const deleteTodo = (id) => (dispatch) => {
  dispatch({
    type: DELETE_TODO,
    payload: id,
  });
  dispatch(deleteFromSelectedTodoList(id));
};
