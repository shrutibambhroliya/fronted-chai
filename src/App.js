import React, { useEffect, useState } from "react";
import LoginPage from "./Pages/LoginPage";
import { ThemeProvider } from "./Context/Theme";
import SignupPage from "./Pages/SignupPage";
import Navbar from "./Components/Navbar";
import HomePage from "./Pages/HomePage";
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
      {/* <LoginPage /> */}
      {/* <SignupPage /> */}
      {/* <Navbar /> */}
      <HomePage />
    </ThemeProvider>
  );
};

export default App;
