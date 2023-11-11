import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { rememberMe } from "../../store/rememberSlice";
import storage from "redux-persist/lib/storage";
import sessionStorage from "redux-persist/lib/storage/session";
import { useNavigate } from "react-router-dom";
import { persistor } from "../../store/store";
const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { remembermeInfo } = useSelector((state: any) => state.remember);
  const [rememberMeState, setRememberMe] = useState(remembermeInfo);
  const changeMenu = () => {
    dispatch(rememberMe(rememberMeState));
    if (rememberMeState) {
      navigate("/cv");
    } else {
      navigate("/cv");
    }
  };

  return (
    <div className="login-page">
      <div className="container mx-auto px-[30px]">
        <div className="grid grid-cols-1 gap-4">
          <div className="login-page-inner">
            <div className="grid grid-cols-1 gap-4">
              <span>
                Default remember me : {remembermeInfo === true ? "YES" : "NO"}
              </span>
            </div>
            <div className="grid grid-cols-1 gap-4">
              <div className="single-field">
                <input
                  type="checkbox"
                  id="vehicle1"
                  checked={rememberMeState}
                  onChange={(e: any) => {
                    setRememberMe(e?.target?.checked);
                  }}
                />
                <label htmlFor="vehicle1"> I have a bike</label>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-4">
              <div className="single-field">
                <button onClick={changeMenu} className="primary-btn w-full">
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
