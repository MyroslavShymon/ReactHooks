import React, { useState } from "react";

import "./App.css";
import List from "./List";
import ListFunctional from "./ListFunctional";

function App() {
  const [visible, setVisible] = useState(true);
  const [visibleListFunctional, setVisibleListFunctional] = useState(true);

  function toggleVisible() {
    setVisible((visible) => !visible);
  }
  function toggleVisibleListFunctional() {
    setVisibleListFunctional((visible) => !visible);
  }

  return (
    <div className="App">
      {visible && <List />}
      <button onClick={toggleVisible}>Change visible</button>

      {visibleListFunctional && <ListFunctional />}
      <button onClick={toggleVisibleListFunctional}>
        Change visible of functional component
      </button>
    </div>
  );
}

export default App;
