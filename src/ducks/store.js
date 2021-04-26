import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import promiseMiddleware from 'redux-promise-middleware';
import productReducer from './productReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({
    user: userReducer,
    product: productReducer
});

export default createStore(rootReducer, composeWithDevTools(applyMiddleware(promiseMiddleware)));