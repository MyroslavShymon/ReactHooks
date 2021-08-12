import React, { useState, memo } from "react";

export default memo(function Counter2({ counterInit }) {
  const [counter, setCounter] = useState(counterInit);
  console.log("Counter2 re-render");
  return (
    <>
      <div>
        Counter2: <span>{counter}</span>
      </div>
      <button onClick={() => setCounter(counter + 1)}>Increment</button>
      <button onClick={() => setCounter(counter - 1)}>Decrement</button>
      <button onClick={() => setCounter(0)}>Reset</button>
    </>
  );
});
