import React, { useState } from "react";

import "./App.css";
import Count from "./Count";
import IsFive from "./IsFive";

function App() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  return (
    <div className="App">
      <span style={{ fontWeight: "bold" }}>Counter 1:</span>
      <div className="counter">
        <button onClick={() => setCount1(count1 + 1)}>+</button>
        <Count id={1} value={count1} />
      </div>

      <hr />

      <span style={{ fontWeight: "bold" }}>Counter 2:</span>
      <div className="counter">
        <button onClick={() => setCount2(count2 + 1)}>+</button>
        <Count id={2} value={count2} />
        <IsFive value={count2} />
      </div>
    </div>
  );
}

export default App;
