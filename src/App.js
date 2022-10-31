import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Gallery from "./pages/Gallery";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import First from "./pages/First";
import Second from "./pages/Second";
import Third from "./pages/Third";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />

        <Route path="/About" element={<About />} />

        <Route path="/Contact" element={<Contact />} />

        <Route path="/Gallery" element={<Gallery />} />

        <Route path="/Gallery/First" element={<First />} />

        <Route path="/Gallery/Second" element={<Second />} />

        <Route path="/Gallery/Third" element={<Third />} />

        
      </Routes>
    </Router>
  );
}

export default App;
