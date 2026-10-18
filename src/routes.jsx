import App from "./App";
import Homepage from "./components/Homepage";
import CartPage from "./components/CartPage";
import ShopPage from "./components/ShopPage";


const routes = [
    {
      path: "/",
      element: <App />,
      children: [
        { index: true, element: <Homepage /> },
        { path: "home", element: <Homepage /> },
        { path: "cart", element: <CartPage /> },
        { path: "shop", element: <ShopPage /> },
      ]
    },
  ];

export default routes;