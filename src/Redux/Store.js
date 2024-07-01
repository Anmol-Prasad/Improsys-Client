import { legacy_createStore as createStore, applyMiddleware } from "redux";
import { cartReducer } from "./CartReducers";
import { thunk } from "redux-thunk";

const middleware = [thunk];

const store = createStore(cartReducer, applyMiddleware(...middleware));

export default store;
