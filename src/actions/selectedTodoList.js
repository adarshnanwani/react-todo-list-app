import { SET_SELECTED_TODO_LIST } from './types';

export const setSelectedTodoList = (id) => (dispatch, getState) => {
  const items = getState().todoListItems.filter(
    (item) => item.todoListId === parseInt(id)
  );
  dispatch({
    type: SET_SELECTED_TODO_LIST,
    payload: { id, items },
  });
};
