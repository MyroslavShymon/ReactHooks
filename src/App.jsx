import React, { useEffect, useRef, useState } from "react";

import "./App.css";
import List from "./List";

function App() {
  const [numbers, setNumbers] = useState([
    { id: 1, number: 1 },
    { id: 2, number: 2 },
    { id: 3, number: 3 },
    { id: 4, number: 4 },
    { id: 5, number: 5 },
    { id: 6, number: 6 },
    { id: 7, number: 7 },
  ]);
  const ulRef = useRef();
  const timerRef = useRef();
  const [timerState, setTimerState] = useState();

  const addRandomNumber = () => {
    const randNumber = Math.round(Math.random() * 10);
    setNumbers((prev) => [
      ...prev,
      { id: prev.length + 1, number: randNumber },
    ]);
  };

  const startTimer = () => {
    console.log("startTimer");
    // setTimerState(setInterval(addRandomNumber, 1000));
    timerRef.current = setInterval(addRandomNumber, 1000);
  };

  const stopTimer = () => {
    console.log("stopTimer");
    // clearInterval(timerState);
    clearInterval(timerRef.current);
  };

  const handleMouseMove = () => {
    console.log("Handle MouseMove!");
  };

  const removeListener = () => {
    ulRef.current.removeEventListener("mousemove", handleMouseMove);
  };

  useEffect(() => {
    if (ulRef && ulRef.current) {
      console.log(ulRef.current);
      ulRef.current.addEventListener("mousemove", handleMouseMove);
      return () => removeListener();
    }
  });

  useEffect(() => {
    console.log("component did update or mount");
  });

  return (
    <div className="App">
      <div>
        <ul ref={ulRef}>
          {numbers.map((number) => (
            <li key={number.id}>{number.number}</li>
          ))}
        </ul>
        <button onClick={addRandomNumber}>Add new random number</button>
        <button onClick={removeListener}>Remove mousemove listener</button>
        <button onClick={startTimer}>Start add random numbers</button>
        <button onClick={stopTimer}>Stop add random numbers</button>
        <button onClick={() => setTimerState(1)}>
          Change button state{timerState}
        </button>
        <button
          onClick={() => {
            timerRef.current = 1;
          }}
        >
          Change button state{timerState}
        </button>
      </div>
    </div>
  );
}

export default App;
