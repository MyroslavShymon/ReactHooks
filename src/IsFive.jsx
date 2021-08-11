import React from "react";

let renderCount = 0;

function IsFive({ value }) {
  console.warn(`isFive render: ${++renderCount}`);
  const getResult = React.useMemo(() => {
    let i = 0;
    while (i < 453400450) i++;
    return value === 5 ? "Is five :D" : "Is not five :(";
  }, [value]);

  return <h3>{getResult}</h3>;
}

export default React.memo(IsFive, (prevProps, nextProps) => {
  console.log(prevProps, nextProps);

  if (nextProps.value === 5 || prevProps.value === 5) {
    return false;
  } else {
    return true;
  }
});
