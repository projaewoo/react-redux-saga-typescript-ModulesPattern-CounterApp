import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import createSagaMiddleware from "redux-saga";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";

import rootReducer, { rootSaga } from "modules";
import { composeWithDevTools } from "redux-devtools-extension";

import Counter from "components/Counter";
import Users from "components/Users";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

// rootSaga 실행
sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <Users />
  </Provider>,
  document.getElementById("root")
);
