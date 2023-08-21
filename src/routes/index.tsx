import React, { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Posts from "../pages/post";
import Accordion from "../pages/accordion";
import ReactFormHook from "../components/reactFormHook/index";
const AllRoutes = () => {
  return (
    <BrowserRouter>
      <Suspense>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/accordion" element={<Accordion />} />
          <Route path="react-form-hook" element={<ReactFormHook />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default AllRoutes;
