import { v4 } from 'uuid';
import { ADD_TODO } from './types';
import { addToSelectedTodoList } from './selectedTodoList';

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
