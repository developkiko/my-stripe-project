import React, {useState, useEffect} from 'react';
import {NextPage} from 'next';
import Head from 'next/head';
import Products from '../components/Products';
import Pagination from '../components/Pagination';
import MiniCart from '../components/MiniCart';
import styles from '../styles/home.module.css';
import data from '../data.json';
import {CartItem} from '../types';

const ProductsList: NextPage = () => {
    const [products] = useState(data);
    const [cart, setCart] = useState<CartItem[]>([]);
    const addToCart = (product: CartItem) => setCart(prevCart => [...prevCart, product]);
    const [currentPage, setCurrentPage] = useState(1);
    const [productsPerPage] = useState(20);

    useEffect(() => {
        const cartData = localStorage.getItem('cart');
        if (cartData) {
            setCart(JSON.parse(cartData));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

    if (!products || products.length <= 0) return <>Products not found!</>;

    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);
    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
    const totalPrice = cart.reduce((total, item) => total + item.quantity * item.price, 0);

    return (
        <div>
            <Head>
                <title>Product List</title>
            </Head>
            <div className={styles.main}>
                <MiniCart totalItems={totalItems} totalPrice={totalPrice}/>
                <Products products={currentProducts} addToCart={addToCart}/>
                <Pagination
                    totalPages={products.length / productsPerPage}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                />
            </div>
        </div>
    );
};

export default ProductsList;
