// import { useState } from "react";
// import "./index.css";

import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Error404 from "../pages/Errors/Error404";
import CuVi from "../pages/MonCV/moncv";
import AllProjects from "../pages/AllProjects/Allprojects";
import Contact from "../pages/contact/contact";
import DetailProject from "../pages/DetailsProject/DetailProject";

function RoutesPubic() {
  return <>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Mon_CV" element={<CuVi />} />
        <Route path="/projects" element={<AllProjects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/project" element={<DetailProject />} />
        <Route path="*" element={<Error404 />} />
    </Routes>
  </>;
}

export default RoutesPubic;
