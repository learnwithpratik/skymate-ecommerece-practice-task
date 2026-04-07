import { createRoot } from "react-dom/client";
import "./index.css";
import AppRoutes from "./routes/AppRoutes.jsx";
import { AuthProvider } from "./context/AuthContext.jsx";
import { ToastContainer } from "react-toastify";

createRoot(document.getElementById("root")).render(
    <AuthProvider>
        <AppRoutes />
        <ToastContainer position="bottom-right" theme="dark" autoClose="1000"/>
    </AuthProvider>
);
