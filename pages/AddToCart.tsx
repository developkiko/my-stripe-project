import {useRouter} from 'next/router';
import {NextPage} from "next";
import Head from "next/head";
import React from "react";
import data from '../data.json';
import {Product, CartProps} from '../interfaces';

const AddToCart: NextPage = () => {
    const router = useRouter();
    const {ref} = router.query;
    const refUrlHash = ref?.toString().replace('#', '');
    const refUrl = refUrlHash?.toString().replace('http://localhost:3000', 'https://wi-usa.vercel.app');

    const product: Product | undefined = data.find(
        (item: Product) => item.url.toString() === refUrl
    );
    function handleHomeClick() {
        router.push('/index.html');
    }
    function handlePriceClick() {
        router.push('/pricelist');
    }

    product !== undefined && console.log({product})

    return (
        <div>
            <Head>
                <title>Redirect to Price List</title>
            </Head>
            <p>Referrer: {refUrlHash}; Found link: {refUrl}</p>
            {product !== undefined?<p>Product id: {product.id};<img src={product.photoUrl} alt={product.name}/></p>:<p>Product not found;</p>}
            <button onClick={() => router.back()}>Back</button><button onClick={handleHomeClick}>Home</button><button onClick={handlePriceClick}>Price</button><button onClick={handlePriceClick}>Add to Cart</button>
        </div>
    );
};

export default AddToCart;
