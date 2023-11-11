import React, { useEffect, useMemo, useRef, useState } from "react";
// use ref retun an object with a special property current
// not rerender the component
// the reference value is persisted between render
const products = [
  {
    name: "apple",
    price: 39,
  },
  {
    name: "banana",
    price: 30,
  },
];
const UseRefComponent = () => {
  const currentRef = useRef(0);
  const [stateValue, setStateValue] = useState(1);
  useEffect(() => {
    currentRef.current = currentRef.current + 1;
  }, []);

  const totalCakePrice = useMemo(() => {
    return products.reduce((total, cake) => total + cake.price, 0);
  }, []);

  return (
    <div className="maon">
      <p>useMemo total price {totalCakePrice}</p>
      <p>state value:{stateValue}</p>
      <button onClick={() => setStateValue(stateValue + 1)}>
        change state value
      </button>
      <p>this is useRef component {currentRef.current}</p>
    </div>
  );
};

export default UseRefComponent;
