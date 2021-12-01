import { put, call, takeEvery } from "redux-saga/effects";
import axios, { AxiosResponse } from "axios";
import {
  GET_USERS_START,
  getUsersSuccess,
  getUsersError,
} from "modules/users/actions";

// saga 작성
function* getUsers() {
  // call함수: 해당 함수가 반환될 때까지 기다려줌
  // 이로 인해, 비동기 처리 가능
  const users: AxiosResponse = yield call(() =>
    axios.get(`http://jsonplaceholder.typicode.com/users`)
  );

  try {
    yield put(getUsersSuccess(users.data));
  } catch (e: any) {
    // TODO. e type 명시
    yield put(getUsersError(e));
  }
}

export function* getUsersSaga() {
  yield takeEvery(GET_USERS_START, getUsers);
}
