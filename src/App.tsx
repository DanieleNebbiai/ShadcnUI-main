import React from "react";
import { ThemeProvider } from "@/context/ThemeContext";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { NavbarComponent } from "@/components/navbar";
import { HomePage } from "@/Pages/Home";
import { ShowcasePage } from "./Pages/Showcase";
import { ComponentsPage } from "./Pages/Components";
import { ThemeWrapper } from "./components/ThemeWrapper";

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <Router>
        <ThemeWrapper>
          <NavbarComponent />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/Showcase" element={<ShowcasePage />} />
            <Route path="/Components/*" element={<ComponentsPage />} />
          </Routes>
        </ThemeWrapper>
      </Router>
    </ThemeProvider>
  );
};

export default App;
