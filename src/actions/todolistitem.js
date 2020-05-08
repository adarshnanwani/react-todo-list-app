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
  setSelectedTodoList,
} from './selectedTodoList';

export const getAllTodoItemsForUser = () => async (dispatch, getState) => {
  try {
    // dispatch GET_ALL_ITEMS_FOR_A_USER
    dispatch({
      type: GET_ALL_ITEMS_FOR_A_USER,
    });
    // Call API to fetch all todos --- /todos/all
    const res = await axios.get('/todos/all');
    // dispatch SET_ALL_ITEMS_FOR_A_USER with API response as payload
    dispatch({
      type: SET_ALL_ITEMS_FOR_A_USER,
      payload: res.data.data,
    });
    if (res.data.data[0]) {
      dispatch(setSelectedTodoList(res.data.data[0].todolist));
    }

    // implement reducer for case SET_ALL_ITEMS_FOR_A_USER (like we did for todolistReducer)
    // call getAllTodoItemsForUser where appropriate
  } catch (err) {
    console.log(err);
  }
};

export const addTodo = (text, todoListId) => async (dispatch, getState) => {
  try {
    const res = await axios.post(`/todos/${todoListId}`, { text });
    const todo = res.data.data;

    const newTodo = {
      text: todo.text,
      completed: todo.completed,
      _id: todo._id,
      createdDate: todo.createdAt,
      todolist: todo.todolist,
    };
    dispatch({
      type: ADD_TODO,
      payload: newTodo,
    });
    if (getState().selectedTodoList.id === todoListId) {
      dispatch(addToSelectedTodoList(newTodo));
    }
  } catch (err) {
    console.log(err);
  }
};

export const deleteTodo = (id) => async (dispatch) => {
  try {
    await axios.delete(`/todos/${id}`);
    dispatch({
      type: DELETE_TODO,
      payload: id,
    });
    dispatch(deleteFromSelectedTodoList(id));
  } catch (err) {
    console.log(err);
  }
};

export const toggleTodo = (id) => async (dispatch, getState) => {
  try {
    const items = [...getState().todoListItems];
    const copyTodo = items.find((item) => item._id === id);
    const todo = { ...copyTodo };
    todo.completed = !todo.completed;
    const index = items.findIndex((item) => item._id === id);
    const res = await axios.put(`/todos/${id}`, todo);
    const updatedTodo = res.data.data;
    dispatch({
      type: TOGGLE_TODO,
      payload: {
        updatedTodo,
        index,
      },
    });
    dispatch(toggleSelectedTodoListItem(id));
  } catch (err) {
    console.log(err);
  }
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
  try {
    dispatch({
      type: DELETE_TODOS_FROM_A_TODO_LIST,
      payload: todoListId,
    });
  } catch (err) {
    console.log(err);
  }
};
