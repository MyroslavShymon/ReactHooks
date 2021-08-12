import React, { useReducer, memo } from "react";

//Використовуєм коли логіка ініціалізації складна
function initState(initialState) {
  return initialState;
}

// console.log("action.payload", action.payload);
function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "reset":
      return initState(action.payload);
    default:
      throw new Error("Unknown action");
  }
}

export default memo(function Counter({ initialState = 0 }) {
  console.log("Counter1 renders");
  const [state, dispatch] = useReducer(reducer, initialState);

  const increment = () => {
    dispatch({ type: "increment" });
  };
  const decrement = () => {
    dispatch({ type: "decrement" });
  };
  const reset = () => {
    dispatch({ type: "reset", payload: initialState });
  };

  return (
    <>
      <div>
        Counter: <span>{state.count}</span>
      </div>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </>
  );
});
