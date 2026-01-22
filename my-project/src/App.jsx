import { Routes, Route } from "react-router";
import HomePage from "./pages/HomePage.jsx";
import CheckoutPage from "./pages/checkout/CheckoutPage.jsx";
import "./App.css";
import OrderPage from "./pages/OrderPage.jsx";
import TrackingPage from "./pages/TrakingPage.jsx";
import Page404 from "./pages/Page404.jsx";

function App() {
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="checkout" element={<CheckoutPage />} />
      <Route path="orders" element={<OrderPage />} />
      <Route path="tracking" element={<TrackingPage />} />
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
}

export default App;
