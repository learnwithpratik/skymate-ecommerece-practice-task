import React from "react";
import AppRoutes from "./routes/AppRoutes";
import Navbar from "./components/Navbar";
import { CartProvider } from "./context/CartContext";
import CartDrawer from "./components/CartDrawer";

const App = () => {
  return (
    <div>
      <CartProvider>
        <Navbar />
        <AppRoutes />
        <CartDrawer />
      </CartProvider>
    </div>
  );
};

export default App;
