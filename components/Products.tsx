import React from 'react';
import styles from '../styles/Products.module.css';
import {Product, ProductProps} from '../interfaces';

const Products: React.FC<ProductProps> = ({ products, addToCart }) => {
    if (!products || products.length <= 0) return <>Products not found!</>;

    const handleAddToCart = (product: Product) => {
        addToCart({
            id: product.id,
            name: product.name,
            price: product.price,
            photoUrl: product.photoUrl,
            quantity: 1
        });
    };

    return (
        <div className={styles.productContainer}>
                {products.map((product) => (
                    <div key={product.id} className={styles.product}>
                        <h2 className={styles.productTitle}>{product.name}</h2>
                        <img className={styles.productImage} src={product.photoUrl} alt={product.name} />
                        <p className={styles.productCategory}>Category: <span>{product.category}</span></p>
                        <p className={styles.productPrice}>Price: <span>${product.price}</span></p>
                        <p className={styles.productDescription}>{product.description}</p>
                        <button className={styles.productButton} onClick={() => handleAddToCart(product)}>
                            Add to cart
                        </button>
                    </div>
                ))}
        </div>
    );
};

export default Products;
