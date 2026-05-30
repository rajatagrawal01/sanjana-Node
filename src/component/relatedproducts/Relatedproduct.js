import React from 'react';
import "./related.css";
import data_product from '../Assets/data';
import Item from '../item/Item';
export default function Relatedproduct() {
    return (
        <div className='related'>
            <h1>Related Products</h1><hr />
            <div className='products'>
                {data_product.map((item, i) => {
                    return (
                        <Item key={item.id} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
                    )
                })}
            </div>
        </div>
    )
}
