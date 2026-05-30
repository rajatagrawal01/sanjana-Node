import React, { useContext, useState } from 'react'
import startImg from "../Assets/star_icon.png";
import dullImg from "../Assets/star_dull_icon.png";
import "./productDisplay.css";
import Swal from 'sweetalert2';
import { ShopContext } from '../../context/Shopcontextprovider';
export default function ProductDisplay(props) {
    // const [size, setSize] = useState("");
    // const [clicked, setClicked] = useState(false);

    const { addToCart, cartItem, size, setSize, whishlist, setWhishlist, addToWhishlist } = useContext(ShopContext);
    const { product } = props;
    return (
        <div className='productDisplay'>
            <div className='leftImages'>
                <img src={product.image} alt='' />
                <img src={product.image} alt='' />
                <img src={product.image} alt='' />
                <img src={product.image} alt='' />
            </div>
            <div className='product-main-image'>
                <img src={product.image} alt='' />
            </div>
            <div className='rightDisplay'>
                <h1>{product.name}</h1>
                <div className='StarImg'>
                    <img src={startImg} alt='' />
                    <img src={startImg} alt='' />
                    <img src={startImg} alt='' />
                    <img src={startImg} alt='' />
                    <img src={dullImg} alt='' />
                    <p>(122)</p>
                </div>
                <div className='priceDetails'>
                    <p className='old_price'>${product.old_price}</p>
                    <p className='new_price'>${product.new_price}</p>
                </div>
                <div className='pro'>
                    <p>Premium quality fabric with a soft and comfortable feel.
                        Perfect for daily wear, casual outings, and all seasons.
                    </p>
                </div>
                <div className='sizeBox'>
                    <h4>Select Size</h4>
                    <div className='sizes'>
                        <div onClick={() => setSize("S")}>S</div>
                        <div onClick={() => setSize("M")}>M</div>
                        <div onClick={() => setSize("L")}>L</div>
                        <div onClick={() => setSize("XL")}>XL</div>
                        <div onClick={() => setSize("XXL")}>XXL</div>
                    </div>
                </div>
                <div className='addToCartBtn'>

                    <button className='addToCart_btn'
                        onClick={() => {

                            if (!size) {

                                Swal.fire({
                                    icon: "warning",
                                    title: "Select Size First"
                                });

                                return;
                            }

                            addToCart(product.id, size);

                        }}
                    >
                        ADD TO CART
                    </button>
                    <div className='whishlist'>
                        {/* <i className={clicked ?
                            "fa-solid fa-heart" :
                            "fa-regular fa-heart"
                        } onClick={() => {
                            setClicked(!clicked); addToWhishlist(product)
                        }}
                            style={{
                                color: clicked ? "red" : "black",
                                cursor: "pointer",
                                fontSize: "24px"
                            }}>
                        </i> */}
                        <i

                            className={
                                whishlist.some((item) => item.id === product.id)
                                    ? "fa-solid fa-heart"
                                    : "fa-regular fa-heart"
                            }

                            onClick={() => {
                                addToWhishlist(product);
                            }}
                            style={{
                                color:
                                    whishlist.some((item) => item.id === product.id)
                                        ? "red"
                                        : "",
                                cursor: "pointer",
                                fontSize: "24px"
                            }}
                        >
                        </i>
                    </div>
                </div>
                <div className='category'><span>Category:</span><p>{product.category}</p></div>
                <div className='tag'><span>Tags: </span>Modern, Latest</div>
            </div>
        </div >
    )
}
