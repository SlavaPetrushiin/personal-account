import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunk from 'redux-thunk';
import authentication from "./authentication/authentication";

const reducer = combineReducers({
    authentication: authentication
});

const store = createStore(reducer, applyMiddleware(thunk));

window.store = store

export default store;