import React from 'react'
import "./category.css";
import sort from "../Assets/dropdown_icon.png";
import all_products from "../Assets/all_product"
import Item from '../item/Item';
export default function Category(props) {
  return (
    <div className='banner'>
      <img src={props.banner} alt='' />
      <div className='banner_text'>
        <p>
          <span>Showing 1 - 12</span> Out Of 54 Products
        </p>
        <div className='sort_category'>
          Sort by <img src={sort} alt='' />
        </div>
      </div>
      <div className='shopCategory-products'>
        {all_products.map((item, i) => {
          if (props.category === item.category) {
            return <Item id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
          } else {
            return null;
          }
        })}
      </div>
      <div className='btn'>
        <button style={{ backgroundColor: "#ededed", border: "none", color: "#787878" }}>Explore more</button>
      </div>
    </div>
  )
}
