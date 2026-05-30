import React from 'react'
import "./newsLetter.css";
export default function NewsLetter() {
    return (
        <div className='newsletter'>
            <h1>Get Exclusive Offers on Your Email</h1>
            <p>Subscribe to our newletter and stay updated</p>
            <input type='email' placeholder='Your Email id' />
            <button>Subscribe</button>
        </div>
    )
}
