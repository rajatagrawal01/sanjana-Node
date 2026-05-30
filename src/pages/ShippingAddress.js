import React from "react";
import "./ShippingAddress.css";
import Checkout from "./Checkout";
export default function ShippingAddress() {
    return (
        <div className="shipping-container">

            {/* <div className="checkout-steps">
                <div className="active-step">Shipping</div>
                <div>Payment</div>
                <div>Review</div>
                <div>Place Order</div>
            </div> */}
            <Checkout />
            <div className="shipping-card">
                <h2>Shipping Address</h2>

                <div className="row">
                    <div className="input-group">
                        <label>Full Name</label>
                        <input type="text" placeholder="Rahul Sharma" />
                    </div>

                    <div className="input-group">
                        <label>Phone Number</label>
                        <input type="text" placeholder="9876543210" />
                    </div>
                </div>

                <div className="input-group">
                    <label>Email Address</label>
                    <input type="email" placeholder="rahul@gmail.com" />
                </div>

                <div className="input-group">
                    <label>Address</label>
                    <input
                        type="text"
                        placeholder="123, Green Park, Near Metro Station"
                    />
                </div>

                <div className="row">
                    <div className="input-group">
                        <label>City</label>
                        <input type="text" placeholder="New Delhi" />
                    </div>

                    <div className="input-group">
                        <label>State</label>
                        <input type="text" placeholder="Delhi" />
                    </div>

                    <div className="input-group">
                        <label>Pincode</label>
                        <input type="text" placeholder="110016" />
                    </div>

                    <div className="input-group">
                        <label>Country</label>
                        <select>
                            <option>India</option>
                            <option>USA</option>
                            <option>UK</option>
                        </select>
                    </div>
                </div>

                <button className="continue-btn">
                    CONTINUE TO PAYMENT
                </button>
            </div>
        </div>
    );
}