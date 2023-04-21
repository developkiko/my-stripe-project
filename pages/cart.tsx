import React, { useState, useEffect } from 'react';
import { NextPage } from 'next';
import Cart from '../components/Cart';
import { CartItem } from '../types';

const cart: NextPage = () => {
    const [cart, setCart] = useState<CartItem[]>([]);

    const removeFromCart = (productId: number) => {
        const productIndex = cart.findIndex((product) => product.id === productId);
        if (productIndex !== -1) {
            const updatedCart = [...cart];
            updatedCart.splice(productIndex, 1);
            setCart(updatedCart);
            localStorage.setItem('cart', JSON.stringify(updatedCart));
        }
    };
    const clearCart = () => {
        setCart([]);
        localStorage.removeItem('cart');
    };

    const cartTotal = cart.reduce((total, item) => total + item.price, 0);

    useEffect(() => {
        const savedCart = localStorage.getItem('cart');
        if (savedCart) setCart(JSON.parse(savedCart));
    }, []);

    return <Cart cart={cart} removeFromCart={removeFromCart} clearCart={clearCart} cartTotal={cartTotal} />;
};

export default cart;
