import React, { Children } from 'react'
import Navbar from "./component/navbar/Navbar";
import { createBrowserRouter, RouterProvider, Route, Routes } from "react-router-dom";
import Layout from './Layout';
import Shop from './component/navbar/Shop';
import Category from './component/navbar/Category';
import LoginSignUp from './pages/LoginSignUp';
import Footer from './component/footer/Footer';
import men_banner from "./component/Assets/banner_mens.png";
import women_banner from "./component/Assets/banner_women.png";
import kid_banner from "./component/Assets/banner_kids.png";
import Product from './pages/Product';
import ProductDisplay from './component/product/ProductDisplay';
import Cart from './pages/Cart';
import LoginPage from './pages/LoginPage';
import Profile from './pages/Profile';
import Whishlist from './component/navbar/Whishlist';
import ShippingAddress from './pages/ShippingAddress';
export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true, element: <Shop />
        },
        {
          path: "men", element: <Category category="men" banner={men_banner} />
        },
        {
          path: "women", element: <Category category="women" banner={women_banner} />
        },
        {
          path: "kids", element: <Category category="kid" banner={kid_banner} />
        },
        {
          path: "Cart", element: <Cart />
        },
        {
          path: "product/:productId",
          element: <Product />
        },

        {
          path: "loginSignUp", element: <LoginSignUp />
        },
        {
          path: "LoginPage", element: <LoginPage />
        },
        {
          path: "profile", element: <Profile />
        },
        {
          path: "whishlist", element: <Whishlist />
        },
        {
          path: "shipping",
          element: <ShippingAddress />
        }
      ]
    }
  ])
  return (
    < div >
      {/* https://dummyjson.com/products */}
      {/* < Navbar /> */}
      <RouterProvider router={router} />
    </div>
  )
}
