import React from "react";
import data from "./data.json";
import "./ProductList.css";

class ProductList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: [] };
  }
  componentDidMount() {
    this.setState({ data: data });
  }
  render() {
    const product_list = this.state.data.rows
      ? this.state.data.rows.map(product => {
          return <li key={product.product_id}>{product.name}</li>;
        })
      : "";
    return (
      <div>
        <ul>{product_list}</ul>
      </div>
    );
  }
}

export default ProductList;
