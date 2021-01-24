import React, { Component } from "react";

class ProductItem extends Component {
  render() {
    const { category, features } = this.props.product;
    return (
      <div>
        <h3>{features}</h3>

        <h3>{category}</h3>
      </div>
    );
  }
}

export default ProductItem;
