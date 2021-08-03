import React, { useState, useEffect } from "react";

function useLogger(value) {
  useEffect(() => {
    console.log("Value changed", value);
  }, [value]);
}

function useInput(initialValue) {
  const [value, setValue] = useState(initialValue);

  const onChange = (event) => {
    setValue(event.target.value);
  };

  const clear = () => setValue("");

  return {
    bind: {
      value,
      onChange,
    },
    value,
    clear,
  };
}

function App() {
  const input = useInput("");
  const lastName = useInput("");

  useLogger(input.value);

  return (
    <div className={"container pt-3"}>
      <h1>Name: {input.value}</h1>
      <h1>Last name: {lastName.value}</h1>
      <button
        className="btn btn-warning"
        onClick={() => {
          input.clear();
          lastName.clear();
        }}
      >
        Clear
      </button>
      <hr />
      <input type="text" {...input.bind} />
      <input type="text" {...lastName.bind} />
    </div>
  );
}

export default App;
