import GraduationPage from "./pages/Graduation";
import UnderConstruction from "./pages/UnderConstruction";
import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";

function App() {
  
  
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<UnderConstruction />} />
        <Route path="/dashboard" element={<UnderConstruction />} />
        <Route path="/graduation" element={<GraduationPage />} />
        <Route path="/exams" element={<UnderConstruction />} />
        <Route path="/teachers" element={<UnderConstruction />} />

      </Routes>
    </HashRouter>
  );
}



export default App;
