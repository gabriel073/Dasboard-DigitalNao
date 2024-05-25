import Dashboard from "./components/Dashboard.jsx";
import Home from "./components/Home.jsx";
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import Order from "./components/Order.jsx";
import Products from "./components/Products.jsx";
import Shipping from "./components/Shipping.jsx";
import Payments from "./components/Payments.jsx";
import Settings from "./components/Settings.jsx";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "./redux/userSlice.js";
import { useEffect } from "react";


function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/home" element={<Home />} />
          <Route path="/order" element={<Order />} />
          <Route path="/products" element={<Products />} />
          <Route path="/shipping" element={<Shipping />} />
          <Route path="/payments" element={<Payments />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </Router>
    </>
  )
}
export default App;
