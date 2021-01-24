// import "./App.css";
import axios from "axios";
import React, { Component } from "react";
import ProductItem from "./ProductItem";
import Spinner from "../layout/Spinner";

const Products = ({ loading, products }) => {
  if (!loading) {
    return <Spinner />;
  } else {
    return (
      <div style={productStyle}>
        {products.products.map((product) => (
          <ProductItem product={product} />
        ))}
      </div>
    );
  }
};

const productStyle = {
  display: "grid",
  gridTemplateColumns: "repeate(3,1fe)",
  gridGap: "1rem",
};
export default Products;
