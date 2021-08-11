import React, { useState, useRef, useCallback } from "react";

import "./App.css";
import Cars from "./Cars";

function App() {
  const [counter, setCounter] = useState(0);
  const [model, setModel] = useState("");
  const [cars, setCars] = useState([
    { id: 1, model: "Mercedes Benz" },
    { id: 2, model: "Shevrolet Aveo" },
    { id: 3, model: "AUDI A8" },
  ]);
  return (
    <>
      <Cars cars={cars} />
      <br />
      <input
        type="text"
        value={model}
        onChange={(event) => setModel(event.target.value)}
      />
      <button
        onClick={() => {
          setCars(cars.concat([{ id: cars.length + 1, model }]));
        }}
      >
        Add car
      </button>
      <hr />
      <button onClick={() => setCounter(counter + 1)}>+++</button>
      <br />
      {counter}
    </>
  );
}

export default App;
