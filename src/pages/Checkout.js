import React from 'react'
import "./Checkout.css";
export default function Checkout() {
    return (
        <div className="checkout-steps">
            <div className="shipping">
                <div className="inside_shipping"></div>
                Shipping
            </div>
            <div className="Payment">
                <div className="inside_payment"></div>
                Payment
            </div>
            <div className="review">
                <div className="inside_review"></div>
                Review
            </div>
            <div className="place-order">
                <div className="inside_place-order"></div>
                Place Order
            </div>
        </div>
    )
}
