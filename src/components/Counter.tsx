import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootReducerType } from "modules";
// import { increase, decrease } from "modules/counter";
import { increase, increaseAsync, decreaseAsync } from "modules/counter";

const Counter = () => {
  const state = useSelector((state: RootReducerType) => state.counter);
  const dispatch = useDispatch();

  const handleIncrease = () => {
    dispatch(increaseAsync());

    // dispatch(increase());
    // dispatch({ type: 'counter/INCREASE' })와 동일한 코드
    // saga를 통해 리듀서에 도착
  };

  const handleDecrease = () => {
    dispatch(decreaseAsync());
    // dispatch({ type: 'counter/DECREASE' })와 동일한 코드
  };

  return (
    <>
      <div>{state}</div>
      <button onClick={handleIncrease}>up</button>
      <button onClick={handleDecrease}>down</button>
    </>
  );
};

export default Counter;
