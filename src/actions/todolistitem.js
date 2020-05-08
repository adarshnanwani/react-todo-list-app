import { v4 } from 'uuid';
import axios from '../axiosInstance';
import {
  ADD_TODO,
  DELETE_TODO,
  TOGGLE_TODO,
  UPDATE_TODO,
  DELETE_TODOS_FROM_A_TODO_LIST,
  GET_ALL_ITEMS_FOR_A_USER,
  SET_ALL_ITEMS_FOR_A_USER,
} from './types';
import {
  addToSelectedTodoList,
  deleteFromSelectedTodoList,
  toggleSelectedTodoListItem,
  updateSelectedTodoListItem,
} from './selectedTodoList';

export const getAllTodoItemsForUser = () => async (dispatch) => {
  try {
    // dispatch GET_ALL_ITEMS_FOR_A_USER
    // Call API to fetch all todos --- /todos/all
    // dispatch SET_ALL_ITEMS_FOR_A_USER with API response as payload
    // implement reducer for case SET_ALL_ITEMS_FOR_A_USER (like we did for todolistReducer)
    // call getAllTodoItemsForUser where appropriate
  } catch (err) {
    console.log(err);
  }
};

export const addTodo = (text, todoListId) => (dispatch, getState) => {
  axios.post(`/todos/${todoListId}`, { text });
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
  const items = [...getState().todoListItems];
  const copyTodo = items.find((item) => item._id === id);
  const todo = { ...copyTodo };
  todo.completed = !todo.completed;
  const index = items.findIndex((item) => item._id === id);
  dispatch({
    type: TOGGLE_TODO,
    payload: {
      todo,
      index,
    },
  });
  dispatch(toggleSelectedTodoListItem(id));
};

export const updateTodo = (id, newText) => (dispatch, getState) => {
  const items = [...getState().todoListItems];
  const index = items.findIndex((item) => item._id === id);
  const copyTodo = items.find((item) => item._id === id);
  const todo = { ...copyTodo };
  todo.text = newText;
  dispatch({
    type: UPDATE_TODO,
    payload: {
      todo,
      index,
    },
  });
  dispatch(updateSelectedTodoListItem(id, newText));
};

export const deleteTodoItemsByTodoListId = (todoListId) => (dispatch) => {
  dispatch({
    type: DELETE_TODOS_FROM_A_TODO_LIST,
    payload: todoListId,
  });
};
