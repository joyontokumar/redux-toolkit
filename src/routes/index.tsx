import React, { Suspense, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Posts from "../pages/post";
import Accordion from "../pages/accordion";
import ReactFormHook from "../components/reactFormHook/index";
import FormikValidationForm from "../components/formik/index";
import UserReducerComponent from "../components/userReducerHook";
import UseRefComponent from "../components/useRef";
import LoadingComponent from "../components/loading";
import FaceDetect from "../components/face-detect";
import CVFomar from "../components/cv-format";
import Login from "../components/login";
import ReactCalender from "../react-calender/index";
import NotFound from "../components/not-found";
import { useSelector } from "react-redux";
const FetchComponent = React.lazy(
  () => import("../components/customHook/dataFetchComponent")
);
const AllRoutes = () => {
  let userInfo = useSelector((state: any) => state?.user);
  console.log("get state", userInfo);
  // console.log("storageType", storageType.token);
  // useEffect(() => {
  //   if (localStorage) {
  //     console.log("remove session storage");
  //     sessionStorage.removeItem("persist:root");
  //   }
  // }, []);
  return (
    <BrowserRouter>
      <Suspense fallback={<LoadingComponent />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/accordion" element={<Accordion />} />
          <Route path="/react-form-hook" element={<ReactFormHook />} />
          <Route path="/formik" element={<FormikValidationForm />} />
          <Route path="/usereducer" element={<UserReducerComponent />} />
          <Route path="/data-fetch" element={<FetchComponent />} />
          <Route path="/calender" element={<ReactCalender />} />

          {userInfo.token !== "" && <Route path="/cv" element={<CVFomar />} />}

          <Route path="/face-detect" element={<FaceDetect />} />
          <Route path="/use-ref" element={<UseRefComponent />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default AllRoutes;
