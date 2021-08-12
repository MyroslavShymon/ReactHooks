import React from "react";

let renderCount = 0;

function IsFive({ value }) {
  console.warn(`isFive render: ${++renderCount}`);
  const getResult = React.useMemo(() => {
    let i = 0;
    while (i < 453400450) i++;
    return value === 5 ? "Is five :D" : "Is not five :(";
  }, [value]);
  //Воно би робило ререндер і тормозило перший каунтер бо стейт знаходиться в App
  //і якшо його міняєм все ререндериться і ця функція знов викликається того ми зробили UseMemo
  //для того шоб воно рерндирилось тільки при зміні того валю яке є в другому каунтері
  

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
