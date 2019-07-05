import React from "react";

class ProductListItem extends React.Component {
  render() {
    return <li>{this.props.children}</li>;
  }
}

export default ProductListItem;
