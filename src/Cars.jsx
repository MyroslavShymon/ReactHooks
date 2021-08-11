import { useCallback } from "react";
import Car from "./Car";

export default function Cars({ cars }) {
  const onCarClick = useCallback((model) => {
    console.log(model);
  }, []);

  return cars.map((car) => {
    return <Car key={car.id} model={car.model} onCarClick={onCarClick} />;
  });
}
