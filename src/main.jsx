import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router';
import './index.css';
import App from './App.jsx';
import Homepage from './components/Homepage.jsx';
import CartPage from './components/CartPage.jsx';
import ShopPage from './components/ShopPage.jsx';


const router = createBrowserRouter([
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
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
