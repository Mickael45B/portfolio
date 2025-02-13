// import { useState } from "react";
import "./styles/HUB_styles.scss";
import "./pageFrame.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import RoutesPubic from "./routes/AppRoutes";

function App() {
  return (
    <>
      <Header />

      <RoutesPubic />

      <Footer />
    </>
  );
}

export default App;
