import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
// import { logger } from 'redux-logger';

const reducers = combineReducers({});

const middleware = [thunk];
// if (process.env.NODE_ENV === 'development') {
//   middleware.push(logger);
// }

const store = createStore(reducers, applyMiddleware(...middleware));
export default store;
