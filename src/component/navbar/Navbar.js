import React, { useContext, useState } from 'react';
import "./Navbar.css";
import logo from "../Assets/logo.png";
import cart_icon from "../Assets/cart_icon.png";
import { Link } from "react-router-dom";
import { ShopContext } from '../../context/Shopcontextprovider';
import profile from "../Assets/profile_icon.jpg";
import Whishlist from './Whishlist';
import Swal from 'sweetalert2';

export const Navbar = () => {
    const [menu, setMenu] = useState("shop");
    const { cart, handleLogout } = useContext(ShopContext);
    const user = JSON.parse(localStorage.getItem("currentUser"));
    const isLogin = localStorage.getItem("loggedIn");
    // const [clicked, setClicked] = useState(false);
    return (
        <div className='navbar'>
            <div className='nav-logo'>
                <Link to="/"><img src={logo} alt="" /></Link>
                <h1>SHOPPER</h1>
            </div>
            <ul className='nav-menu'>
                <li onClick={() => setMenu("shop")}><Link to="/" style={{ textDecoration: "none" }}>Shop</Link>{menu === "shop" ? <hr /> : <></>}</li>
                <li onClick={() => setMenu("men")}><Link to="/men" style={{ textDecoration: "none" }}>Men</Link>{menu === "men" ? <hr /> : <></>}</li>
                <li onClick={() => setMenu("women")}><Link to="/women" style={{ textDecoration: "none" }}>Women</Link>{menu === "women" ? <hr /> : <></>}</li>
                <li onClick={() => setMenu("kids")}><Link to="/kids" style={{ textDecoration: "none" }}>Kids</Link>{menu === "kids" ? <hr /> : <></>}</li>
            </ul>
            <div className='nav-login-cart'>
                {
                    isLogin ?
                        <>
                            <button onClick={handleLogout} >
                                <p>Hello, {user.name}</p><p style={{ fontWeight: "500", fontSize: "20px" }}>Logout</p></button>
                            {/* <p>Hello, {user.name}</p> */}
                        </>
                        :
                        <div>
                            <button><Link to="/LoginSignUp" style={{ textDecoration: "none" }}><p style={{ fontWeight: "500", fontSize: "15px" }}>SignUp/Login</p></Link></button>
                        </div>

                }
                <Link to="/cart"><img src={cart_icon} alt="Cart" style={{ textDecoration: "none" }} /></Link>
                <div className='cart-count'>{cart}
                </div>

                {/* <Link to="/Whishlist"> <i className={clicked ?
                    "fa-solid fa-heart" :
                    "fa-regular fa-heart"
                } onClick={() => setClicked(!clicked)}
                    style={{
                        color: clicked ? "red" : "black",
                        cursor: "pointer",
                        fontSize: "24px"
                    }}>
                </i>
                </Link> */}
                <Link to="/Whishlist"><i className="fa-regular fa-heart" style={{ cursor: "pointer", fontSize: "24px" }}></i>
                </Link>
                {
                    isLogin && <Link to="/Profile"><img src={profile} alt='' width="40" height="40" /></Link>
                }
            </div>
        </div >
    )
}
export default Navbar;
