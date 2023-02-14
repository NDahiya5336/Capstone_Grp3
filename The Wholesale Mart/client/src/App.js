import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./screens/Home";
import Products from "./screens/Products";

import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <div className="">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </>
  );
}

export default App;
