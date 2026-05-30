import React, { useContext } from 'react'
import { ShopContext } from '../../context/Shopcontextprovider'
import "./whishlist.css";
import { Link } from 'react-router-dom';
export default function Whishlist() {
    const { whishlist } = useContext(ShopContext);
    console.log(whishlist);
    return (
        <div className='main'>
            {
                whishlist.map((item) => {
                    return (
                        <Link
                            to={`/product/${item.id}`}
                            key={item.id}
                            style={{ textDecoration: "none", color: "black" }}
                        >
                            <div className='cards'>
                                <div>
                                    <img src={item.image} alt='' />
                                </div>
                                <div className='card-info'>
                                    <h2 key={item.id}>{item.name}</h2>
                                </div>
                                <div className='price'>
                                    <span className='new-price'>${item.new_price.toFixed(2)}</span>
                                    <span className='old-price'>${item.old_price.toFixed(2)}</span>
                                </div>
                            </div>
                        </Link>
                    )
                })
            }
        </div>
    )
}
