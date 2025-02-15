// import { useState } from "react";
// import "./styles/reset.scss";
// import "./pageFrame.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import RoutesPubic from "./routes/AppRoutes";

function App() {
  return (
    <>
      <div className="m-0 p-4 box-border flex flex-col items-center h-screen bg-cover bg-center place-content-between bg-[url(../public/fond.jpeg)]">
      <Header />
        <RoutesPubic />
      <Footer />
      </div>
    </>
  )
}

export default App;
