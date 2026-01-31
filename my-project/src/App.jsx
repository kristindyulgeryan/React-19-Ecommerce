import axios from "axios";
import { Routes, Route } from "react-router";
import { useEffect, useState } from "react";
import HomePage from "./pages/home/HomePage.jsx";
import CheckoutPage from "./pages/checkout/CheckoutPage.jsx";
import OrderPage from "./pages/orders/OrderPage.jsx";
import TrackingPage from "./pages/TrakingPage.jsx";
import Page404 from "./pages/Page404.jsx";

import "./App.css";

function App() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    axios.get("/api/cart-items?expand=product").then((response) => {
      setCart(response.data);
    });
  }, []);

  return (
    <Routes>
      <Route index element={<HomePage cart={cart} />} />
      <Route path="checkout" element={<CheckoutPage cart={cart} />} />
      <Route path="orders" element={<OrderPage cart={cart} />} />
      <Route path="tracking" element={<TrackingPage />} />
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
}

export default App;
