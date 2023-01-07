import GraduationPage from "./pages/Graduation";
import UnderConstruction from "./pages/UnderConstruction";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UnderConstruction />} />
        <Route path="/dashboard" element={<UnderConstruction />} />
        <Route path="/graduation" element={<GraduationPage />} />
        <Route path="/exams" element={<UnderConstruction />} />
        <Route path="/teachers" element={<UnderConstruction />} />

      </Routes>
    </BrowserRouter>
  );
}



export default App;
