import React, { useState, useEffect } from "react";

const ListFunctional = () => {
  const [numbers, setNumbers] = useState([
    { id: 1, number: 1 },
    { id: 2, number: 2 },
    { id: 3, number: 3 },
  ]);
  const [count, setCount] = useState(0);

  const addRandomNumber = () => {
    const randNumber = Math.round(Math.random() * 10);
    setNumbers([...numbers, { id: numbers.length + 1, number: randNumber }]);
  };

  useEffect(() => {
    console.log("Functional component did update numbers state");
  }, [numbers]);

  useEffect(() => {
    console.log("Functional component did update or mount");
  });

  useEffect(() => {
    console.log("Functional component did mount");
    return () => {
      console.log("Functional component did UN mount");
    };
  }, []);

  function increment() {
    setCount((prev) => prev + 1);
  }

  return (
    <div>
      <h2>Functional component</h2>
      <h3>Counter: {count}</h3>
      <button onClick={increment}>Increment counter</button>
      <ul>
        {numbers.map((number) => (
          <li key={number.id}>{number.number}</li>
        ))}
      </ul>
      <button onClick={addRandomNumber}>Add new random number</button>
    </div>
  );
};

export default ListFunctional;
