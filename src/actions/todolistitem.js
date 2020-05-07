import { v4 } from 'uuid';
import { ADD_TODO, DELETE_TODO, TOGGLE_TODO } from './types';
import {
  addToSelectedTodoList,
  deleteFromSelectedTodoList,
  toggleSelectedTodoListItem,
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

export const toggleTodo = (id) => (dispatch, getState) => {
  const todo = getState().todoListItems.find((item) => item._id === id);
  todo.completed = !todo.completed;
  const index = getState().todoListItems.findIndex((item) => item._id === id);
  dispatch({
    type: TOGGLE_TODO,
    payload: {
      todo,
      index,
    },
  });
  dispatch(toggleSelectedTodoListItem(id));
};
