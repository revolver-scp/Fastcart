import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./pages/navbar";
import Notfound from "./pages/notfound";
import SignUp from "./pages/signUp";
import Login from "./pages/login";
import Contact from "./pages/contact";
import About from "./pages/about";
import Home from "./pages/home";
import Wishlist from "./pages/wishlist";
import AboutID from "./pages/aboutID";
import Checkout from "./pages/checkout";
import Cart from "./pages/cart";
import Account from "./pages/account";
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
        },
        {
          path: "/account",
          element: <Account />
        }
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default App;
