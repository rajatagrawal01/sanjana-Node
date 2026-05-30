import React from 'react'
import "./Item.css"
import { Link } from 'react-router-dom'
export default function Item(props) {
    return (
        <div className='item'>
            <Link to={`/product/${props.id}`}>
                <img onClick={window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                })} src={props.image} alt='' />
            </Link>
            <p>{props.name}</p>
            <div className='item-price'>
                <div className='new-price'>
                    <p>${props.new_price}</p>
                </div>
                <div className='old-price'>
                    <p>${props.old_price}</p>
                </div>
            </div>
        </div>
    )
}
