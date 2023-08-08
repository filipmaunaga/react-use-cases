import React, { useCallback, useState } from "react";
import List from "./List";

const UseCallbackCase = (): JSX.Element => {
  const [count, setCount] = useState(1);
  const [darkTheme, setDarkTheme] = useState(false);

  const getItems = useCallback(
    (increment: number) => {
      return [count + increment, count + 1 + increment, count + 2 + increment];
    },
    [count]
  );

  const divStyle = {
    backgroundColor: darkTheme ? "black" : "white",
    color: darkTheme ? "white" : "black",
  };

  return (
    <div style={divStyle}>
      <input
        type="number"
        value={count}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setCount(parseInt(e.target.value))
        }
      ></input>
      <button onClick={() => setDarkTheme((prevTheme) => !prevTheme)}>
        Toggle theme
      </button>
      <List getItems={getItems} />
    </div>
  );
};

export default UseCallbackCase;
