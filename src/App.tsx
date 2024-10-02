import { ThemeProvider } from "@/context/ThemeContext";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { NavbarComponent } from "@/components/navbar";
import { HomePage } from "@/Pages/Home";
import { ShowcasePage } from "./Pages/Showcase";
import { ComponentsPage } from "./Pages/Components";
import { ThemeWrapper } from "./components/ThemeWrapper";

function App() {
  return (
    <ThemeProvider>
      <ThemeWrapper>
        <Router basename="/ShadcnUI-main">
          <NavbarComponent />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/Showcase" element={<ShowcasePage />} />
            <Route path="/Components/*" element={<ComponentsPage />} />
          </Routes>
        </Router>
      </ThemeWrapper>
    </ThemeProvider>
  );
}

export default App;
