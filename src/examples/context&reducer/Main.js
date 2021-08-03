import React from "react";
import { useAlert } from "./AlertContext";

export default function Main() {
  const { show } = useAlert();
  return (
    <>
      <h1>Hello in example with Context</h1>
      <button
        onClick={() => show("This text from Main.js")}
        className={"btn btn-success"}
      >
        Show alert
      </button>
    </>
  );
}
