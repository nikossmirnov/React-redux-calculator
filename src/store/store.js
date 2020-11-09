import { applyMiddleware, createStore } from "redux";
import reducer from "../reducers";
import thunk from "redux-thunk";
import initialState from "./initialState";
import { composeWithDevTools } from "redux-devtools-extension";
const middleware = [thunk];

export const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);
