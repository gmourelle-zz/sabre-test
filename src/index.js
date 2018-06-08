import React from "react";
import { render } from "react-dom";
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import App from "./app/App";
import reducers from "./reducers/index";

export const initialState = {};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// const store = createStore(reducers,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
export const store = createStore(
  reducers,
  initialState,
  composeEnhancers(applyMiddleware(thunk))
);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
