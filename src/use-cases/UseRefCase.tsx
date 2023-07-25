import React, { useEffect, useRef, useState } from "react";

const UseRefCase = (): JSX.Element => {
  const [text, setText] = useState<string>("");
  const renderCount = useRef(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const prevName = useRef("");

  useEffect(() => {
    renderCount.current = renderCount.current + 1;
    prevName.current = text;
  });
  const focus = () => {
    inputRef.current?.focus();
  };

  return (
    <div>
      <input
        ref={inputRef}
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <div>I've rendered {renderCount.current} times</div>
      <button onClick={focus}>Click me!</button>
      <div>
        My name is {text} and it used to be {prevName.current}
      </div>
    </div>
  );
};

export default UseRefCase;
