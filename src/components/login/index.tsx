import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { registeredUserInfo } from "../../store/userSlice";
import sessionStorage from "redux-persist/es/storage/session";
import localStorage from "redux-persist/es/storage";
import { createStore } from "../../store/store";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [checkedValue, setCheckedValue] = useState<any>(undefined);
  const submitHandler = () => {
    if (checkedValue) {
      dispatch(registeredUserInfo("fsdfsdfsdfsdfsdfsdfsdf"));
      createStore("localStorage");
      sessionStorage.removeItem("persist:root");
      navigate("/cv");
    } else {
      dispatch(registeredUserInfo("fsdfsdfsdfsdfsdfsdfsdf"));
      createStore("sessionStorage");
      localStorage.removeItem("persist:root");
      navigate("/cv");
    }
  };

  return (
    <div className="login-page">
      <div className="container mx-auto px-[30px]">
        <div className="grid grid-cols-1 gap-4">
          <div className="login-page-inner">
            <div className="grid grid-cols-1 gap-4">
              <div className="single-field">
                <input
                  type="checkbox"
                  id="vehicle1"
                  onChange={(e: any) => {
                    setCheckedValue(e?.target?.checked);
                  }}
                />
                <label htmlFor="vehicle1"> I have a bike</label>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-4">
              <div className="single-field">
                <button className="primary-btn w-full" onClick={submitHandler}>
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
