import { memo } from "react";

export default memo(function Car({ model, onCarClick }) {
  console.log("Render car");
  return (
    <>
      <div onClick={() => onCarClick(model)}>{model}</div>
      <hr />
    </>
  );
});
