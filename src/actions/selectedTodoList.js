import { SET_SELECTED_TODO_LIST } from './types';

export const setSelectedTodoList = (id) => (dispatch) => {
  dispatch({
    type: SET_SELECTED_TODO_LIST,
    payload: id,
  });
};
