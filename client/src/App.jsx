import { BrowserRouter, Routes, Route } from "react-router-dom";

import Footer from "./components/footer";
import Navbar from "./components/navbar";

import Home from "./screens/home";
import Auth from "./screens/auth";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Auth />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
