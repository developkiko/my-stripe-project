import React from 'react';
import Link from 'next/link';
import styles from '../styles/MiniCart.module.css';

type Props = {
    totalItems: number;
    totalPrice: number;
};

const MiniCart: React.FC<Props> = ({totalItems, totalPrice}) => {
    return (
        <div className={styles.Header}>
            <Link className={styles.homeLink} href="/index.html">Home</Link>
            <Link className={styles.miniCart} href="/cart">
                <p className={styles.totalItems}><span>{totalItems}</span> items in cart</p>
                <p className={styles.totalPrice}>Total: <span>${totalPrice.toFixed(2)}</span></p>
                <p><span>GO TO CART &#8594;</span></p>
            </Link>
        </div>
    );
};

export default MiniCart;
