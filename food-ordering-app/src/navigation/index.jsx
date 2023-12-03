import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "../componenets/Header";
import Cart from "../pages/Cart";
import Home from "../pages/Cart";
import Login from "../pages/Cart";
import Menu from "../pages/Cart";
import PaymentSuccess from "../pages/Cart";
import Register from "../pages/Cart";

const Navigation = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/payment-success" element={<PaymentSuccess />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Navigation;
