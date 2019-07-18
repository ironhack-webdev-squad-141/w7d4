import React, { Component } from "react";
import ProductTable from "./ProductTable";
import SearchBar from "./SearchBar";

export default class FilterableProductTable extends Component {
  state = {
    checked: false,
    searchInput: ""
  };

  onSearchChange = (name, value) => {
    this.setState({
      [name]: value
    });
  };

  render() {
    const { searchInput, checked } = this.state;

    const products = this.props.products.filter(product => {
      if (checked) {
        return (
          product.stocked &&
          product.name.toLowerCase().includes(searchInput.toLowerCase())
        );
      } else {
        return product.name.toLowerCase().includes(searchInput.toLowerCase());
      }
    });

    return (
      <div>
        <h2>IronStore</h2>
        <SearchBar
          onSearchChange={this.onSearchChange}
          searchInput={this.state.searchInput}
          checked={this.state.checked}
        />
        <ProductTable products={products} />
      </div>
    );
  }
}
