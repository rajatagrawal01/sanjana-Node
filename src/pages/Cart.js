import React, { useContext } from 'react';
import { useNavigate } from "react-router-dom";
import { ShopContext } from '../context/Shopcontextprovider';
import all_product from '../component/Assets/all_product';
import remove_icon from "../component/Assets/cart_cross_icon.png";
import empty_bag from "../component/Assets/empty-bag.png";
import "./Cart.css";
export default function Cart() {
    const navigate = useNavigate();
    const { cartItem, removeFromCart, updateQuantity, size, updateSize } = useContext(ShopContext);
    // console.log(cartItem);
    // const hasItems = all_product.some(
    //     (product) => cartItem[cartId]?.quantity > 0
    // );
    const hasItems =
        Object.keys(cartItem).length > 0;
    let subtotal = 0;
    Object.entries(cartItem).map(([cartId, item]) => {
        const productId = Number(cartId.split("_")[0]);
        const product = all_product.find((p) => p.id === productId);
        if (!product) return null;
        subtotal += product.new_price * item.quantity;
    })

    return (
        <div style={{ marginTop: "50px" }}>
            {
                hasItems && (
                    <>
                        <table
                            style={{
                                width: "90%",
                                margin: "auto",
                                borderCollapse: "collapse"
                            }}
                        >
                            <thead>
                                <tr
                                    style={{
                                        borderBottom: "1px solid #e2e2e2",
                                        textAlign: "left"
                                    }}
                                >
                                    <th>Product</th>
                                    <th style={{ width: "30%" }}>Title</th>
                                    <th>Price</th>
                                    <th>Quantity</th>
                                    <th>Size</th>
                                    <th>Total</th>
                                    <th>remove</th>
                                </tr>
                            </thead>
                            <tbody style={{
                                width: "90%",
                                margin: "auto",
                            }}>
                                {
                                    Object.entries(cartItem).map(([cartId, item]) => {

                                        const productId = Number(cartId.split("_")[0]);
                                        const product = all_product.find((p) => p.id === productId
                                        );
                                        return (
                                            <tr className='product_card' key={cartId}
                                                style={{
                                                    borderBottom: "1px solid #e2e2e2"
                                                }}
                                            >
                                                <td>
                                                    <img src={product.image} alt='' width="100px" style={{ marginTop: "20px", marginBottom: "20px", borderRadius: "10px" }} />
                                                </td>
                                                <td>
                                                    {product.name}
                                                </td>
                                                <td>
                                                    ${product.new_price}
                                                </td>
                                                <td>
                                                    <select value={item.quantity}
                                                        onChange={(e) =>
                                                            updateQuantity(cartId, e.target.value)
                                                        }>
                                                        <option value="1">1</option>
                                                        <option value="2">2</option>
                                                        <option value="3">3</option>
                                                        <option value="4">4</option>
                                                        <option value="5">5</option>
                                                    </select>
                                                </td>
                                                <td>
                                                    <select value={item.size}
                                                        onChange={(e) => updateSize(cartId, e.target.value)}>
                                                        <option value="S">S</option>
                                                        <option value="M">M</option>
                                                        <option value="L">L</option>
                                                        <option value="XL">XL</option>
                                                        <option value="XXL">XXL</option>
                                                    </select>
                                                </td>
                                                <td>
                                                    ${product.new_price * item.quantity}
                                                </td>
                                                <td>
                                                    <img src={remove_icon} alt='' width="20px" onClick={() => removeFromCart(cartId)} />
                                                </td>

                                            </tr>
                                        )
                                    }
                                    )}
                            </tbody>
                        </table >
                    </>
                )
            }
            {
                hasItems && (
                    < div className='cart'>
                        <div className='payment'>
                            <h1>Cart Totals</h1>
                            <div className='cart-item-total' style={{ borderBottom: "2px solid #e2e2e2" }}>
                                <p>Subtotal</p>
                                <p>${subtotal}</p>
                            </div>
                            <div className='cart-item-total' style={{ borderBottom: "2px solid #e2e2e2" }}>
                                <p>Shipping Fee</p>
                                <p>Free</p>
                            </div>
                            <div className='cart-item-total'>
                                <h3>Total</h3>
                                <h3>${subtotal}</h3>
                            </div>
                            <button className='proceed-btn' onClick={() => navigate('/shipping')}>
                                PROCEED TO CHECKOUT
                            </button>
                        </div>
                        <div className='promoCode'>
                            <p>if you have a promo code, Enter it here.</p>
                            <div className='promo'>
                                <input placeholder='promo code' />
                                <button>Submit</button>
                            </div>
                        </div>
                    </div>
                )
            }
            {
                !hasItems &&
                (
                    <>
                        <img src={empty_bag} alt='' style={{ display: "block", margin: "0 auto", marginTop: "100px" }} />
                        <h2 style={{ textAlign: "center", marginTop: "10px", fontSize: "24px", fontWeight: "bold" }}>Hey, it feels so light!</h2>
                        <p style={{ textAlign: "center", marginTop: "25px", color: "#666" }}>There is nothing in your bag. Let's add some items!</p>
                    </>
                )

            }
        </div >
    )
}