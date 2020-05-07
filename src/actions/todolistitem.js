import { v4 } from 'uuid';
import { ADD_TODO } from './types';

export const addTodo = (text, todoListId) => (dispatch) => {
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
};
