import {
  ADD_TODO_LIST,
  DELETE_TODO_LIST,
  GET_ALL_TODO_LISTS,
  SET_ALL_TODO_LISTS,
} from './types';
import { v4 } from 'uuid';
import { deleteTodoItemsByTodoListId } from './todolistitem';
import { clearTodoListItems, setSelectedTodoList } from './selectedTodoList';
import axios from '../axiosInstance';

export const getTodoListsForUser = () => async (dispatch) => {
  dispatch({
    type: GET_ALL_TODO_LISTS,
  });
  const res = await axios.get('/todolist');
  dispatch({
    type: SET_ALL_TODO_LISTS,
    payload: res.data.data,
  });
};

export const addTodoList = (name) => async (dispatch) => {
  try {
    const res = await axios.post(`/todolist/${name}`);
    const list = res.data.data;
    const newTodoList = {
      name: list.name,
      createdDate: list.createdAt,
      _id: list._id,
    };
    dispatch({
      type: ADD_TODO_LIST,
      payload: newTodoList,
    });
  } catch (err) {
    console.log(err);
  }
};

export const deleteTodoList = (_id) => (dispatch, getState) => {
  dispatch({
    type: DELETE_TODO_LIST,
    payload: _id,
  });

  dispatch(deleteTodoItemsByTodoListId(_id));

  const currentState = { ...getState() };
  if (currentState.selectedTodoList.id === _id) {
    dispatch(clearTodoListItems());
    if (currentState.todolists.length > 0) {
      dispatch(setSelectedTodoList(currentState.todolists[0]._id));
    }
  }
};
