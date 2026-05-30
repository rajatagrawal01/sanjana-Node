import React from 'react';
import logo from "../Assets/logo.png";
import "./footer.css";
import insta from "../Assets/instagram_icon.png";
import wp from "../Assets/whatsapp_icon.png";
import pintester from "../Assets/pintester_icon.png";
export default function Footer() {
    return (
        <div className='footer' style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "20px",
            width: "85%",
            margin: "50px auto"
            // width:"80%",
        }}>

            <div className='nav-logo' style={{
                flexDirection: "row",
                display: "flex",
                alignItems: "center",
                gap: "10px"
            }}>
                <img src={logo} alt="" />
                <h1>SHOPPER</h1>
            </div>

            <div className='items' >
                <ul style={{
                    display: "flex",
                    gap: "20px",
                    listStyle: "none"
                }}>
                    <li>Company</li>
                    <li>Products</li>
                    <li>Offices</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </div>
            <div className='logo' style={{
                margin: "10px",
                gap: "20px"
            }}>
                <img src={insta} alt='' />
                <img src={wp} alt='' />
                <img src={pintester} alt='' />
            </div>
            <hr style={{
                width: "80%",
                border: "1pt solid black"
            }} />
            <div className='text'>
                <p style={{
                    fontSize: "15px",
                    fontWeight: "400"
                }}>Copyright @ 2023 - All Right Reserved</p>
            </div>
        </div >
    )
}
