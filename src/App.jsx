import { useState } from "react";
import { Navigate, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import View from "./View";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id/view" element={<View />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
