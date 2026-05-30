import React from 'react'
import { Link, Outlet,useLocation } from "react-router-dom";
import Navbar from './component/navbar/Navbar';
import Footer from './component/footer/Footer';
export default function Layout() {
    const location = useLocation();
   console.log(location.pathname);
    return (
        <div>
            {/* <nav>
                <Link to="/">Home</Link>
                <Link to="/men">Men</Link>
                <Link to="/women">Women</Link>
                <Link to="/kids">Kids</Link>
                <Link to="/shop">Shop</Link>
            </nav> */}
            <Navbar />
            <Outlet />
            {location.pathname !== "/cart" && <Footer />}
        </div>
    )
}
