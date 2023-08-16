import React, { useCallback, useState } from "react";
import ChildComponentUseCallback from "./childComponent";
const UseCallbackParent = () => {
  const [count, setCount] = useState(0);
  // Function to handle the button click, memoized with useCallback
  const handleClick = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  return (
    <div>
      {console.log("parent component render") as any}
      <p>Count: {count}</p>
      <ChildComponentUseCallback handleClick={handleClick} />
    </div>
  );
};

export default UseCallbackParent;
