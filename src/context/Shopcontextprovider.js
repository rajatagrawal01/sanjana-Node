import React, { createContext, useState } from 'react'
import all_product from '../component/Assets/all_product';
import Swal from 'sweetalert2';
export const ShopContext = createContext(null);
export default function Shopcontextprovider(props) {
    // console.log(cartItem);
    const storedUser =
        localStorage.getItem("currentUser");

    const user =
        storedUser && storedUser !== "undefined"
            ? JSON.parse(storedUser)
            : null;

    const cartKey =
        user ? `cart_${user.email}` : "cartGuest";


    const storedCart =
        localStorage.getItem(cartKey);

    const [cartItem, setCartItem] = useState(

        storedCart && storedCart !== "undefined"

            ? JSON.parse(storedCart)

            : {}
    );

    // const [whishlist, setWhishlist] = useState([]);
    const storedWhishlist =
        localStorage.getItem("whishlist");
    const [whishlist, setWhishlist] = useState(
        storedWhishlist && storedWhishlist !== "undefined" ?
            JSON.parse(storedWhishlist) : []
    );
    const addToWhishlist = (product) => {
        const alreadyExists = whishlist.find((item) =>
            item.id === product.id
        );
        let updateWhishlist;
        if (!alreadyExists) {
            updateWhishlist = ([...whishlist, product]);
        }
        else {
            updateWhishlist = (whishlist.filter((item) => item.id !== product.id))
        }
        setWhishlist(updateWhishlist);
        localStorage.setItem("whishlist", JSON.stringify(updateWhishlist));
    }


    const [size, setSize] = useState("");
    const addToCart = (itemId, size) => {
        const cartId = `${itemId}_${size}`;
        setCartItem((prev) => {
            const updatedCart = {
                ...prev,

                [cartId]: {

                    quantity:
                        (prev[cartId]?.quantity || 0) + 1,

                    size: size
                }
            }
            localStorage.setItem(cartKey,
                JSON.stringify(updatedCart)
            )

            return updatedCart;
        });
    }
    const removeFromCart = (cartId) => {
        setCartItem((prev) => {
            const updatedCart = {
                ...prev
            };

            if (updatedCart[cartId].quantity > 1) {
                updatedCart[cartId] = {
                    ...updatedCart[cartId],
                    quantity: updatedCart[cartId].quantity - 1
                }
            } else {
                delete updatedCart[cartId];
            }
            localStorage.setItem(cartKey, JSON.stringify(updatedCart)
            )
            return updatedCart;
        });
    }
    let cart = 0;
    Object.values(cartItem).forEach((item) => {
        cart += item.quantity;
    });

    const updateQuantity = (cartId, value) => {
        setCartItem((prev) => {
            const updatedCart = {
                ...prev,
                [cartId]: { ...prev[cartId], quantity: Number(value) }
            };
            localStorage.setItem(cartKey, JSON.stringify(updatedCart));
            return updatedCart;
        });
    }

    const updateSize = (cartId, value) => {
        setCartItem((prev) => {
            const updatedCart = {
                ...prev,
                [cartId]: { ...prev[cartId], size: value }
            };
            localStorage.setItem(cartKey, JSON.stringify(updatedCart));
            return updatedCart;
        });
    }
    const handleLogout = () => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You want to Logout?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes Logout'
        }).then((result) => {
            if (result.isConfirmed) {
                localStorage.removeItem("loggedIn")
                localStorage.removeItem("currentUser")
                Swal.fire({
                    title: 'Logged Out!',
                    text: 'Successfully Logout',
                    icon: 'success'
                }).then(() => {
                    window.location.reload();
                })
            }
        })
    }
    const contextValue = {
        cartItem,
        addToCart,
        cart,
        removeFromCart,
        handleLogout,
        updateQuantity,
        size,
        setSize,
        updateSize,
        whishlist,
        setWhishlist,
        addToWhishlist
    }
    return (
        <div>
            <ShopContext.Provider value={contextValue}>
                {props.children}
            </ShopContext.Provider>
        </div>
    )
}
