import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Home } from "./pages/Home";
import { FoodTherapy } from "./pages/FoodTherapy";
import { FreshSnacks } from "./pages/FreshSnacks";
import { AboutUs } from "./pages/about-us.tsx";
import "./i18n"; // 導入 i18n 配置

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100 flex flex-col">
        <Navbar />

        <main className="flex-1 max-w-7xl mx-auto px-4 w-full">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/therapy/:category" element={<FoodTherapy />} />
            <Route path="/fresh-snacks" element={<FreshSnacks />} />
            <Route path="/about" element={<AboutUs />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
