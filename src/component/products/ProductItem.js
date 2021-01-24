import React, { Component } from "react";

class ProductItem extends Component {
  render() {
    const { modelId, description, category, features } = this.props.product;
    return (
      <div>
        <p style={{ fontWeight: "bold" }}>{description}</p>
        <u>
          {features.map((f) => (
            <li>{f}</li>
          ))}
        </u>
        modelId : {modelId}
      </div>
    );
  }
}

export default ProductItem;
