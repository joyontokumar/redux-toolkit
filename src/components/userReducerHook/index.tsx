import React from "react";
import { useReducer } from "react";
import { reducerAction } from "./reducerAction";
import { InititalReducer } from "./initialReducer";
const UserReducerComponent = () => {
  const [state, dispatch] = useReducer(reducerAction, InititalReducer);
  //  const[inital data and update data, action] = useReducer(type wise action and return update value, inital data store)
  const increment = () => {
    dispatch({ type: "INCREMENT", payload: 1 });
  };
  const decrement = () => {
    dispatch({ type: "DECREMENT" });
  };
  const reset = () => {
    dispatch({ type: "RESET" });
  };
  return (
    <div>
      {" "}
      <p>Count: {state.count}</p>
      <p>First Name is {state.firstName}</p>
      <button className="primary mr-1" onClick={increment}>
        Increment
      </button>
      <button className="secondary" onClick={decrement}>
        Decrement
      </button>{" "}
      <button className="secondary" onClick={reset}>
        Reset
      </button>{" "}
    </div>
  );
};

export default UserReducerComponent;
