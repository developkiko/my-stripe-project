import React from 'react';
import styles from '../styles/Cart.module.css';
import { CartItem } from '../types';
import Head from "next/head";

export interface Props {
    cart: CartItem[];
    removeFromCart: (productId: number) => void;
    clearCart: () => void;
    cartTotal: number;
}

const Cart: React.FC<Props> = ({ cart, removeFromCart, clearCart }) => {
    const cartItems: { [id: string]: CartItem } = {};

    cart.forEach((item) => {
        if (cartItems[item.id]) {
            cartItems[item.id].quantity += 1;
            cartItems[item.id].price += item.price;
        } else {
            cartItems[item.id] = {
                ...item,
                quantity: 1,
            };
        }
    });

    const cartItemList = Object.values(cartItems);

    return (
        <div>
            <Head>
                <title>Cart page</title>
            </Head>
            <div>
                <ul>
                    {cartItemList.map((item) => (
                        <li key={item.id} className={styles.cartItem}>
                            <img className={styles.cartItemImage} src={item.photoUrl} alt={item.name} />
                            <div className={styles.cartItemInfo}>
                                <h3 className={styles.cartItemTitle}>{item.name}</h3>
                                <p className={styles.cartItemPrice}>${item.price.toFixed(2)}</p>
                                <p className={styles.cartItemQuantity}>Quantity: {item.quantity}</p>
                                <button className={styles.cartItemButton} onClick={() => removeFromCart(item.id)}>
                                    Remove
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
            <div className={styles.cartTotal}>
                <p>Total: ${cart.reduce((total, item) => total + item.price, 0).toFixed(2)}</p>
            </div>
            <button className={styles.clearCartButton} onClick={clearCart}>
                Clear Cart
            </button>
        </div>
    );
};

export default Cart;
