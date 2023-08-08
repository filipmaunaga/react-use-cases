import React, { useEffect, useState } from "react";

const List = ({
  getItems,
}: {
  getItems: (increment: number) => number[];
}): JSX.Element => {
  const [items, setItems] = useState<number[]>([]);

  useEffect(() => {
    setItems(getItems(5));
    console.log("update");
  }, [getItems]);
  return (
    <>
      {items.map((item) => (
        <div key={item}>{item}</div>
      ))}
    </>
  );
};

export default List;
