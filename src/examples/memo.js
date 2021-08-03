import { useState, useEffect, useRef, useMemo } from "react";
function complexCompute(num) {
  let i = 0;
  while (i < 1000000000) i++;
  return num * 2;
}
function App() {
  const [number, setNumber] = useState(33);
  const [colored, setColored] = useState(false);

  const styles = useMemo(
    () => ({
      color: colored ? "darkred" : "black",
    }),
    [colored]
  );

  const computed = useMemo(() => complexCompute(number), [number]);

  useEffect(() => {
    console.log("Styles changed");
  }, [styles]);

  return (
    <>
      <h1 style={styles}>Computed property: {computed}</h1>
      <button
        className={"btn btn-success"}
        onClick={() => setNumber((prev) => prev + 1)}
      >
        Increment
      </button>
      <button
        className={"btn btn-danger"}
        onClick={() => setNumber((prev) => prev - 1)}
      >
        Decrement
      </button>
      <button
        className={"btn btn-warning"}
        onClick={() => setColored((prev) => !prev)}
      >
        Change color
      </button>
    </>
  );
}

export default App;
