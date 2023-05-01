import React, { useEffect } from "react";

import "./index.css";
import Homepage from "./pages/Home/Homepage";
import { Routes, Route } from "react-router-dom";
import About from "./pages/About/About";
import DesignFactory from "./pages/Services/DesignFactory";
import ConvertorFactory from "./pages/Services/ConvertorFactory";
import CodeFactory from "./pages/Services/CodeFactory";
import TalentFactory from "./pages/Services/TalentFactory";
import IOTSolutions from "./pages/Solutions/IOTSolutions";
import TechnologyPage from "./pages/Technology/TechnologyPage";
import ContactUs from "./pages/Contact/ContactUs";

const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/Techicious-Web" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/services">
          <Route path="design-factory" element={<DesignFactory />} />
          <Route path="converter-factory" element={<ConvertorFactory />} />
          <Route path="code-factory" element={<CodeFactory />} />
          <Route path="talent-factory" element={<TalentFactory />} />
        </Route>
        <Route path="/solutions">
          <Route path="iot-solutions" element={<IOTSolutions />} />
        </Route>
        <Route path="/technology" element={<TechnologyPage />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
    </>
  );
};

export default AppRouter;
