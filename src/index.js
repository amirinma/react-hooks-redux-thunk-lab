// ./src/index.js
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import "bootstrap/dist/css/bootstrap.min.css";
import  thunkMiddleware  from "redux-thunk";

import App from "./App";
import catsReducer from "./features/cats/catsSlice.js";
import { composeWithDevTools } from "redux-devtools-extension";


const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware))
const store = createStore( catsReducer, composedEnhancer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);