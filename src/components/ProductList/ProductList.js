import React from "react";
import axios from "axios";
import ROOT_API from "../../constants/constants";
import "./ProductList.css";

class ProductList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: [] };
  }
  componentDidMount() {
    axios
      .get(ROOT_API + "products", {
        params: {
          page: 1,
          limit: 20,
          description_length: 200
        }
      })
      .then(response => {
        this.setState({
          data: response.data
        });
      })
      .catch(error => {
        console.error(error);
      });
  }
  render() {
    const product_list = this.state.data.rows
      ? this.state.data.rows.map(product => {
          return <li key={product.product_id}>{product.name}</li>;
        })
      : "";
    return (
      <section className="product_list">
        <ul>{product_list}</ul>
      </section>
    );
  }
}

export default ProductList;
