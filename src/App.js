import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles.css";
import Products from "./Products";
import Pricing from "./Pricing";
import HomePage from "./HomePage";

export default function App() {
  return (
    <>
      <nav className="navbar">
        <h1>My App</h1>
      </nav>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Products" element={<Products />} />
          <Route path="/Pricing" element={<Pricing />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
