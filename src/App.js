import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import Navbar from "./Components/Common/Navbar";
import Footer from "./Components/All/Footer";
import ShopPage from "./Pages/ShopPage";
import Login from "./Components/User/Login";

import "./App.css";
const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Shop" element={<ShopPage />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
