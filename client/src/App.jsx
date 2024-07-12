import { BrowserRouter, Routes, Route } from "react-router-dom";

import Footer from "./components/footer";
import Navbar from "./components/navbar";

import Home from "./screens/home";
import Auth from "./screens/auth";

import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <main className="container">
      <AuthProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/auth" element={<Auth />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </main>
  );
}

export default App;
