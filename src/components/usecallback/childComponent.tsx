import React from "react";

const ChildComponentUseCallback = ({ handleClick }: any) => {
  console.log("Child component rendered!");
  return (
    <button className="mt-10 secondary-btn" onClick={handleClick}>
      Increment
    </button>
  );
};

export default ChildComponentUseCallback;
