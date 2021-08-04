import {createStore, applyMiddleware} from "redux";
import {persistStore} from "redux-persist";

// Middlewares
import logger from "redux-logger";
import thunkMiddleware from 'redux-thunk';

// Root reducer
import rootReducer from "./root-reducer";

const middlewares = [thunkMiddleware];

if (process.env.NODE_ENV === 'development')
    middlewares.push(logger);

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

export const persistor = persistStore(store);