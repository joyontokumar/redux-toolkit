import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { add } from "./store/cartSlice";
import { logout } from "./utils";
import { RootState } from "./store/store";
const App = () => {
  const dispatch = useDispatch();
  const totalItems = useSelector((state: RootState) => state.cart);
  const addItem = (value: string) => {
    dispatch(add(value));
  };
  return (
    <div className="main-container">
      <div className="inner">
        <h3>Count Add ({`${totalItems.length}`})</h3>
        <button onClick={() => addItem("one")}>save me</button>
        <br />
        <button onClick={logout}>logout</button>
      </div>
    </div>
  );
};
export default App;
