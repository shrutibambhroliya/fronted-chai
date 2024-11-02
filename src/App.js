import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import Profile from "./Components/User/Profile";
import Navbar from "./Components/Common/Navbar";
import Footer from "./Components/All/Footer";
import Login from "./Components/User/Login";
import AllUser from "./Components/User/AllUser";
import CollectionPage from "./Pages/CollectionPage";
import Product from "./Components/All/Product";
import ProductsReveiw from "./Components/All/ProductsReveiw";
import "./App.css";

const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/user-profile" element={<Profile />} />
          <Route path="/all-user" element={<AllUser />} />
          <Route path="/collection" element={<CollectionPage />} />
          <Route path="/" element={<Product />} />
          <Route path="product/:id" element={<ProductsReveiw />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
