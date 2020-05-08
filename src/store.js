import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './reducers/index';

const initialState = {
  user: {
    token: null,
    isAuthenticated: null,
    loading: true,
    user: null,
  },
  todolists: [
    {
      _id: '1',
      name: 'Work',
      createdDate: new Date(),
    },
    {
      _id: '2',
      name: 'Play',
      createdDate: new Date(),
    },
  ],
  todoListItems: [
    {
      _id: '3',
      text: 'Code for an hour',
      completed: false,
      createdDate: new Date(),
      todoListId: '1',
    },
    {
      _id: '4',
      text: 'Build an app',
      completed: true,
      createdDate: new Date(),
      todoListId: '1',
    },
    {
      _id: '5',
      text: 'Go for running',
      completed: false,
      createdDate: new Date(),
      todoListId: '2',
    },
    {
      _id: '6',
      text: 'Play cricket',
      completed: true,
      createdDate: new Date(),
      todoListId: '2',
    },
    {
      _id: '7',
      text: 'Play video games',
      completed: false,
      createdDate: new Date(),
      todoListId: '2',
    },
  ],
};

const middleware = [thunk];

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

store.subscribe(() => {
  const previousState = initialState;
  const currentState = store.getState();
  // compare the token
  if (previousState.user.token !== currentState.user.token) {
    if (currentState.user.token) {
      localStorage.setItem('token', currentState.user.token);
    } else {
      localStorage.removeItem('token');
    }
  }
});

export default store;
