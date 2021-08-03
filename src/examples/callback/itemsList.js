import React, { useEffect, useState } from "react";

export default function ItemList({ getItems }) {
  const [items, setItems] = useState([]);
  useEffect(() => {
    const newItems = getItems();
    setItems(newItems);
    console.log("Use effect itemList");
  }, [getItems]);
  return (
    <ul>
      {items.map((i) => (
        <li key={i}>{i}</li>
      ))}
    </ul>
  );
}
