import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Modeler from "./pages/Modeler";

function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/modeler" element={<Modeler />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
