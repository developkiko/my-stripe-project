// You can include shared interfaces/types in a separate file
// and then use them in any component by importing them. For
// example, to import the interface below do:
//
// import { User } from 'path/to/interfaces';
import {AddToCartFunction} from "../types";

export interface ProductProps {
  products: Product[];
  addToCart: AddToCartFunction;
}


export interface CartItem {
  id: number;
  name: string;
  price: number;
  photoUrl: string;
  quantity: number;
}

export interface Product {
  id: number;
  url: string;
  section: string;
  category: string;
  subcategory: string;
  name: string;
  price: number;
  description: string;
  attributes: string;
  article: string;
  photoUrl: string;
}
