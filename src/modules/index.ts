import { combineReducers } from "redux";
import counter, { counterSaga } from "modules/counter";
import users, { getUsersSaga } from "modules/users";
import { all } from "redux-saga/effects";

const rootReducer = combineReducers({
  counter,
  users,
});

export function* rootSaga() {
  yield all([counterSaga(), getUsersSaga()]);
}

export type RootReducerType = ReturnType<typeof rootReducer>;

export default rootReducer;
