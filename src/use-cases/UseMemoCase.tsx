import React, { useEffect, useMemo, useState } from "react";

const UseMemoCase = (): JSX.Element => {
  const [number, setNumber] = useState<number>(0);
  const [darkTheme, setDarkTheme] = useState<boolean>(false);

  //   second use case of useMemo -- referential equality
  const themeStyles = useMemo(() => {
    return {
      backgroundColor: darkTheme ? "black" : "white",
      color: darkTheme ? "white" : "black",
    };
  }, [darkTheme]);

  useEffect(() => {
    console.log("theme changed");
  }, [themeStyles]);

  const divStyle = {
    display: "flex",
    flexDirection: "column" as "column",
    width: "400px",
    margin: "20px auto",
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setNumber(parseInt(e.target.value));
  };

  const handleClick = (): void => {
    setDarkTheme((prev) => !prev);
  };

  const slowFunction = (num: number) => {
    for (let i = 0; i <= 100000000; i++) {}
    return num * 2;
  };

  // first use case of useMemo -- slow functions
  const doubleValue = useMemo(() => {
    return slowFunction(number);
  }, [number]);

  return (
    <div style={divStyle}>
      <input type="number" value={number} onChange={handleChange} />
      <button onClick={handleClick}>Change theme</button>
      <div style={themeStyles}>{doubleValue}</div>
    </div>
  );
};

export default UseMemoCase;
