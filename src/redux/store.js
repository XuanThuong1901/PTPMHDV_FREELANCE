import {createStore ,combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import loginReducer from "./reducers/LoginReducer";

const rootReducer = combineReducers({
    login: loginReducer,
})

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;