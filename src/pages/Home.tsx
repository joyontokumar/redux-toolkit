import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { blackTheme, whiteTheme } from "../store/colorSlices";
import { logout } from "../utils";
import UseCallbackParent from "../components/usecallback";
import KeyProps from "../components/key-props";
const Home = () => {
  const dispatch = useDispatch();
  const stateValue = useSelector((state: any) => state.switcher);
  console.log("get value", stateValue);
  return (
    <div
      className={`main-container  p-10 ${
        stateValue?.whiteTheme ? "bg-primary-gray" : "bg-primary-dark"
      }`}
    >
      <div className="container px-10">
        <button onClick={() => logout()}>logout</button>
        <div className="grid grid-cols-1 gap-4">
          <div className="inner mt-12.2">
            <button
              onClick={() => {
                dispatch(blackTheme(true));
              }}
              className="bg-[#00ffff] mr-12.2 text-[#fff] inline-block w-[50px]"
            >
              Black
            </button>
            <button
              onClick={() => {
                dispatch(whiteTheme(true));
              }}
              className="bg-[#a12020] text-[#fff] inline-block w-[50px]"
            >
              White
            </button>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div
            className={`left-side p-4 bg-[#6366F1] shadow-lg shadow-cyan-500/50 rounded-lg mt-12.2 ${
              stateValue?.whiteTheme ? "bg-[#000]" : "bg-[#6366F1]"
            }`}
          >
            <h3 className="text-[#fff] mb-1.5">This is text one</h3>
            <p className="text-[#fff]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reiciendis, provident et vitae fugit veritatis magnam molestiae
              distinctio aperiam earum ea!`
            </p>
            <button className="bg-[#fff] mt-12.2 px-2 py-1 rounded-sm shadow-lg shadow-cyan-500/50">
              See More
            </button>
          </div>
          <div className="left-side p-4 rounded-lg mt-12.2 bg-[#06B6D4] shadow-lg shadow-blue-500/50">
            <h3 className="text-[#fff] mb-1.5">This is text two</h3>
            <p className="text-[#fff]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reiciendis, provident et vitae fugit veritatis magnam molestiae
              distinctio aperiam earum ea!`
            </p>
            <button className="bg-[#fff]  mt-12.2 px-2 py-1 rounded-sm shadow-lg shadow-cyan-500/50">
              See More
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1">
          <UseCallbackParent />
        </div>
        <div className="grid grid-cols-1 gap-4">
          <h5>Check Key Props Problems</h5>
          <KeyProps />
        </div>
      </div>
    </div>
  );
};
export default Home;
