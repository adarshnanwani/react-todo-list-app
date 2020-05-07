import {
  SET_SELECTED_TODO_LIST,
  ADD_TO_SELECTED_TODO_LIST,
  DELETE_FROM_SELECTED_TODO_LIST,
  UPDATE_SELECTED_TODO_LIST_ITEM,
  TOGGLE_SELECTED_TODO_LIST_ITEM,
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

export const toggleSelectedTodoListItem = (id) => (dispatch, getState) => {
  const items = [...getState().selectedTodoList.items];
  const copyTodo = items.find((item) => item._id === id);
  const todo = { ...copyTodo };
  todo.completed = !todo.completed;
  const index = items.findIndex((item) => item._id === id);
  dispatch({
    type: TOGGLE_SELECTED_TODO_LIST_ITEM,
    payload: {
      todo,
      index,
    },
  });
};

export const updateSelectedTodoListItem = (id, newText) => (
  dispatch,
  getState
) => {
  const items = [...getState().selectedTodoList.items];
  const copyTodo = items.find((item) => item._id === id);
  const todo = { ...copyTodo };
  todo.text = newText;
  const index = items.findIndex((item) => item._id === id);
  dispatch({
    type: UPDATE_SELECTED_TODO_LIST_ITEM,
    payload: {
      todo,
      index,
    },
  });
};
