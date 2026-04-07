import { RouterProvider, createBrowserRouter } from "react-router";
import About from "../pages/About";
import Home from "../pages/Home";
import MainLayout from "../layouts/MainLayout";
import AuthLayout from "../layouts/AuthLayout";
import Register from "../components/Register";
import Login from "../components/Login";
import ProtectedDashboard from "./ProtectedDashboard";
import AuthProtected from "./AuthProtected";
import Products from "../pages/Products";
import { getAllProducts } from "../api/productApis";
import ProductDetails from "../pages/ProductDetails";

const AppRoutes = () => {
  let router = createBrowserRouter([
    {
      path: "/",
      element: <ProtectedDashboard />,
      children: [
        {
          path: "",
          element: <MainLayout />,
          children: [
            {
              path: "",
              element: <Home />,
            },
            {
              path: "about",
              element: <About />,
            },
            {
              path: "products",
              loader:async()=>{
                let data = await getAllProducts();
                return data;
              },
              hydrateFallbackElement:<p className="text-white py-32 px-32">Loading Products...</p>,
              element: <Products />,
            },
             {
              path: "products/detail/:id",
              element: <ProductDetails data={Products}/>,
            },
          ],
        },
      ],
    },
    {
      path: "/auth",
      element: <AuthProtected />,
      children: [
        {
          path: "",
          element: <AuthLayout />,
          children: [
            {
              path: "",
              element: <Login />,
            },
            {
              path: "register",
              element: <Register />,
            },
          ],
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default AppRoutes;
