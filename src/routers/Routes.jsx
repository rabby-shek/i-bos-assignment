import { createBrowserRouter } from "react-router-dom";
import { Cart, Home, Login, Products, SignUp } from "../pages";
import { AuthLayout, WebsiteLayout } from "../components";

const router = createBrowserRouter([
  {
    path: "/",
    element: <WebsiteLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        path: "/auth/login",
        element: <Login />,
      },
      {
        path: "/auth/sign-up",
        element: <SignUp />,
      },
    ],
  },
]);

export default router;
