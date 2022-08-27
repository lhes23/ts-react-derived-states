import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";

interface Product {
  id: number;
  title: string;
  qty: number;
}

const initialState: Product[] = [
  { id: 1, title: "Black", qty: 1 },
  { id: 2, title: "Red", qty: 1 },
  { id: 3, title: "Blue", qty: 1 },
];

function App() {
  const [products, setProducts] = useState<Product[]>(initialState);
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const selectedProduct = products.find((p) => p.id === selectedId);

  const increment = (id: number) => {
    setProducts((prev) => {
      return prev.map((product) => {
        if (product.id === id) {
          return { ...product, qty: product.qty + 1 };
        } else {
          return product;
        }
      });
    });
  };

  const decrement = (id: number) => {
    setProducts((prev) => {
      return prev.map((product) => {
        if (product.id === id) {
          return { ...product, qty: product.qty - 1 };
        } else {
          return product;
        }
      });
    });
  };

  const selectProductId = (id: number) => {
    const prodId = products.find((p) => p.id === id);
    if (prodId) {
      setSelectedId(prodId.id);
    }
  };

  return (
    <>
      <h1>ALL Products</h1>
      {products?.map((product) => (
        <div key={product.id}>
          {product.title}{" "}
          <button onClick={() => selectProductId(product.id)}>Choose</button>
          <span>
            <button onClick={() => decrement(product.id)}>-</button>
            <span>{product.qty}</span>
            <button onClick={() => increment(product.id)}>+</button>
          </span>
        </div>
      ))}
      <h2>Selected Product</h2>
      <p>{selectedProduct?.title}</p>
      <p>{selectedProduct?.qty}</p>
    </>
  );
}

export default App;
