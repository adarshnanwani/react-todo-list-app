import { ADD_TODO_LIST, DELETE_TODO_LIST } from './types';
import { deleteTodoItemsByTodoListId } from './todolistitem';
import { clearTodoListItems, setSelectedTodoList } from './selectedTodoList';
import { v4 } from 'uuid';

export const addTodoList = (name) => (dispatch) => {
  const newTodoList = {
    name,
    createdDate: new Date(),
    _id: v4(),
  };
  dispatch({
    type: ADD_TODO_LIST,
    payload: newTodoList,
  });
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
