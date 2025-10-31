import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import todoReducer from './reducers/todoReducers';

const rootReducer = combineReducers({
  todo: todoReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
