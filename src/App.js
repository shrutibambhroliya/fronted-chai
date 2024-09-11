import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./Context/Theme";
import HomePage from "./Pages/HomePage";
import Navbar from "./Components/Common/Navbar";
import Footer from "./Components/All/Footer";
import ShopPage from "./Pages/ShopPage";

import "./App.css";
const App = () => {
  const [themeMode, setThemeMode] = useState("light");

  const darkMode = () => {
    setThemeMode("dark");
  };
  const lightMode = () => {
    setThemeMode("light");
  };

  useEffect(() => {
    document.querySelector("html").classList.remove("light", "dark");
    document.querySelector("html").classList.add(themeMode);
  }, [themeMode]);

  return (
    <ThemeProvider value={{ themeMode, darkMode, lightMode }}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Shop" element={<ShopPage />} />
        </Routes>
        <Footer />
      </Router>
    </ThemeProvider>
  );
};

export default App;
