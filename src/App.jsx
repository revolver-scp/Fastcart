import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./pages/Navbar";
import Notfound from "./pages/Notfound";
import SignUp from "./pages/SignUp";
import Login from "./pages/login";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Home from "./pages/Home";
import Wishlist from "./pages/Wishlist";
import AboutID from "./pages/AboutID";
import Checkout from "./pages/Checkout";
import Cart from "./pages/Cart";
import Products from "./pages/Products";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Navbar />,
      children: [
        {
          index: true,
          element: <SignUp />,
        },
        {
          path: "/home",
          element: <Home />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "*",
          element: <Notfound />,
        },
        {
          path: "/wishlist",
          element: <Wishlist />,
        },
        {
          path: "/products/:id",
          element: <AboutID />,
        },
        {
          path: "/checkout",
          element: <Checkout />,
        },
        {
          path: "/cart",
          element: <Cart />,
        },
        {
          path: "/products",
          element: <Products />
        }
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default App;
