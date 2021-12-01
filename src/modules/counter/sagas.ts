import { put, delay, takeEvery, takeLatest } from "redux-saga/effects";
import {
  increase,
  decrease,
  INCREASE_ASYNC,
  DECREASE_ASYNC,
} from "modules/counter/actions";

// saga => 리듀서
export function* increaseSaga() {
  console.log("increaseSaga");
  // 리듀서에게 액션을 디스패치
  yield put(increase()); // = yield put({ type: 'counter/INCREASE' })와 같은 코드
}

export function* decreaseSaga() {
  // 리듀서에게 액션을 디스패치
  yield put(decrease());
}

export function* increaseAsyncSaga() {
  yield delay(1000);
  yield put(increase());
}

export function* decreaseAsyncSaga() {
  yield delay(1000);
  yield put(decrease());
}

export function* counterSaga() {
  // INCREASE_ASYNC 타입이 들어오면, increaseAsyncSaga 함수 작동시킴
  yield takeEvery(INCREASE_ASYNC, increaseAsyncSaga);
  yield takeLatest(DECREASE_ASYNC, decreaseAsyncSaga);
}
