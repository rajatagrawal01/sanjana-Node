import React from 'react'
import "./popular.css"
import data_product from '../Assets/data';
import Item from '../item/Item';
export default function Popular() {
    return (
        <div className='popular'>
            <h2>POPULAR IN WOMEN</h2>
            <hr />
            <div className='product'>
                {data_product.map((item) => {
                    return (
                        <Item id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
                    )
                })}
            </div>
        </div>
    )
}
