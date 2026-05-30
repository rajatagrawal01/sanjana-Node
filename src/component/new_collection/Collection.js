import React from 'react'
import "./collection.css";
import new_collections from "../Assets/new_collections";
import Item from '../item/Item';
export default function Collection() {
    return (
        <div className='collection'>
            <div className='collection-title'>
                <h1>NEW COLLECTION</h1>
                <hr />
            </div>
            <div className='products'>
            {new_collections.map((item)=>{
                return(
                    <Item id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
                )   
            })}
            </div>
        </div>
    )
}
