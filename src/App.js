import React, { memo } from "react";

import "./App.css";
import Counter from "./Counter";
import Counter2 from "./Counter2";

function App() {
  return (
    <div className="App">
      <Counter initialState={{ count: 0 }} />
      <Counter2 counterInit={0} />
    </div>
  );
}

export default App;
