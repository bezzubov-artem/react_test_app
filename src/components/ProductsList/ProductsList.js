import React from 'react';
import { ProductCard } from "../ProductCard/ProductCard.js";
import { products_list } from "./ProductsList.module.scss";

export const ProductsList = ({ chosenProducts }) =>
    chosenProducts.length ? (
        <ul className={products_list}>
          {chosenProducts.map((product) => (
            <li key={product.code}>
              <ProductCard product={product} />
            </li>
          ))}
        </ul>
      ) : (
        <div>Sorry, we've not found this product...</div>
        );
