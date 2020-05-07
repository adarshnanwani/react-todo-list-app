import {
  SET_SELECTED_TODO_LIST,
  ADD_TO_SELECTED_TODO_LIST,
  DELETE_FROM_SELECTED_TODO_LIST,
} from './types';

export const setSelectedTodoList = (id) => (dispatch, getState) => {
  const items = getState().todoListItems.filter(
    (item) => item.todoListId === id
  );
  dispatch({
    type: SET_SELECTED_TODO_LIST,
    payload: { id, items },
  });
};

export const addToSelectedTodoList = (item) => (dispatch) => {
  dispatch({
    type: ADD_TO_SELECTED_TODO_LIST,
    payload: item,
  });
};

export const deleteFromSelectedTodoList = (id) => (dispatch) => {
  dispatch({
    type: DELETE_FROM_SELECTED_TODO_LIST,
    payload: id,
  });
};
