import {createStore, applyMiddleware} from "redux";

// Middlewares
import logger from "redux-logger";
import thunkMiddleware from 'redux-thunk';

// Root reducer
import rootReducer from "./root-reducer";

const middlewares = [thunkMiddleware];

if (process.env.NODE_ENV === 'development')
    middlewares.push(logger);

const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;