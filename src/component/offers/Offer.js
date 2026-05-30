import React from 'react'
import "./Offer.css";
import offer_img from "../Assets/exclusive_image.png";
export default function Offer() {
    return (
        <div class="offer">
            <div class="offer-left">
                <h1>Exclusive<br />Offers For You</h1>
                <p>ONLY ON BEST SELLERS PRODUCTS</p>
                <button>Check now</button>
            </div>

            <div class="offer-right">
                <img src={offer_img} alt="" />
            </div>
        </div>
    )
}
