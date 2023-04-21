// You can include shared interfaces/types in a separate file
// and then use them in any component by importing them. For
// example, to import the interface below do:
//
// import CartItem from 'path/to/types';
import {CartItem} from "../interfaces";

export type AddToCartFunction = (product: CartItem) => void;

export type User = {
    id: number
    name: string
}
