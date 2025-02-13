// import { useState } from "react";
// import "./index.css";

import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Error404 from "../pages/Errors/Error404";

function RoutesPubic() {
  return <>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Error404 />} />
    </Routes>
  </>;
}

export default RoutesPubic;
