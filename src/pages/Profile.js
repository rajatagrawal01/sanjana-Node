import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import profile_logo from "../component/Assets/profile.svg";
import "./Profile.css";
import { ShopContext } from '../context/Shopcontextprovider';
import logout_icon from "../component/Assets/logout.jpg"
// import order_logo from "../component/Assets/order_icon.webp";
// import arrow_icon from "../component/Assets/breadcrum_arrow.png";
// import coupon_icon from "../component/Assets/coupon_icon.webp";

export default function Profile() {
    const { handleLogout } = useContext(ShopContext);
    const { cart } = useContext(ShopContext);

    const user = JSON.parse(localStorage.getItem("currentUser"));
    if (!user) {
        return <Navigate to="/LoginSignUp" />
    }

    return (
        <div className='profile_page'>

            <div className='profile_logo'>
                <img src={profile_logo} alt='' />

                <div>
                    <p>Hello,</p>
                    <h3>{user?.name}</h3>
                    <p className='eml'>{user?.email}</p>
                </div>
            </div>
            <div className='porfile_content'>
                <div className='profile_info' style={{ borderBottom: "1px solid #e5e7eb", width: "100%" }}>
                    <p style={{ color: "grey" }}>Username</p>
                    <p style={{ fontWeight: "bold" }}>{user?.name}</p>
                </div>
                <div className='profile_info' style={{ borderBottom: "1px solid #e5e7eb", width: "100%" }}>
                    <p style={{ color: "grey" }}>CartItems</p>
                    <p style={{ fontWeight: "bold" }}>{cart}</p>
                </div>
                <div className='logout'>
                    <button  onClick={handleLogout} >
                        <img src={logout_icon} alt=''/> <span>Logout</span>
                    </button>
                </div>
            </div>
        </div>
    )
}