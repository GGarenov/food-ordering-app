import React from "react";
import { useState, useEffect } from "react";
import { ProductPreviewCard } from "./ProductPreviewCard";

export const ProductsPreview = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/products")
      .then((response) => response.json())
      .then((data) => setProducts(data?.data))
      .catch((e) => console.log(e));
  }, []);

  return (
    <div className="container mx-auto pb-4 w-2/3 text-blue">
      <h2>Products</h2>
      {products.length > 0 &&
        products.map((product, index) => {
          return (
            <div key={index} className="w-full p-3">
              <ProductPreviewCard product={product} />
            </div>
          );
        })}
    </div>
  );
};
