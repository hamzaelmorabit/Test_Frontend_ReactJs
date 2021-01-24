import React, { Component } from "react";
import Products from "./component/products/Products";

class App extends Component {
  state = {
    products: [],
    loading: false,
  };

  componentDidMount() {
    fetch("https://app.getrecall.com/api/products")
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        this.setState({
          loading: true,
          products: json,
        });
      });
  }

  render() {
    return (
      <div className="App">
        <Products loading={this.state.loading} products={this.state.products} />
      </div>
    );
  }
}

export default App;
