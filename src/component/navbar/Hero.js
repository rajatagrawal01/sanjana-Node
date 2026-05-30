import React from 'react'
import "./Hero.css";
import hand_icon from "../Assets/hand_icon.png";
import arrow_img from "../Assets/arrow.png"
import hero_img from "../Assets/hero_image.png";
export default function Hero() {
    return (
        <div className='hero'>
            <div className='hero-left'>
                <h2>NEW ARRIVALS ONLY</h2>
                <div className='text'>
                    <div className='hand-icon'>
                        <p>new</p>
                        <img src={hand_icon} alt="Hand Icon" />
                    </div>
                    <p>collections</p>
                    <p>for everyone</p>
                </div>
                <div className='hero-latest-btn'>
                    <button>Latest Collection
                        <img src={arrow_img} alt="" />
                    </button>
                </div>
            </div>
            <div className='hero-right'>
                <img src={hero_img} alt="" />
            </div>
        </div>
    )
}
