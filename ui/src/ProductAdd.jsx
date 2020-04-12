// /* eslint-disable react/destructuring-assignment */

/* eslint linebreak-style: ["error", "windows"] */


import React from 'react';

export default class ProductAdd extends React.Component {
  constructor() {
    super();

    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = { Price: '$' };
    this.handlepriceChange = this.handlepriceChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const form = document.forms.productAdd;
    const Price = form.Price.value.replace('$', '');
    const product = {
      name: form.Product_Name.value,
      Price: Price > null ? Price : null,
      // Price: form.Price.value.replace('$', ''),
      Image: form.Image_URL.value,
      category: form.category.value,
    };
    const { createProduct } = this.props;
    createProduct(product);
    form.Product_Name.value = '';
    form.Price.value = '$';
    form.Image_URL.value = '';
    form.category.value = '';
  }

  handlepriceChange() {
    this.setState({ Price: document.forms.productAdd.Price.value });
  }

  render() {
    const { Price } = this.state;
    return (

      <form name="productAdd" onSubmit={this.handleSubmit}>
        <div className="wrapper_1">
          {/* eslint jsx-a11y/label-has-associated-control: ["error", { assert: "either" } ] */}
          <label htmlFor="productname">
            Product Name
            <br />
            <input type="text" name="Product_Name" placeholder="Product Name" id="productname" />
          </label>
          <br />
          <label htmlFor="Price">
            Price Per Unit
            <br />
            <input type="text" name="Price" placeholder="Price" id="Price" defaultValue={Price} onChange={this.handlepriceChange} />
          </label>
          <br />
          <button type="submit">Add Product</button>
        </div>
        <div className="wrapper_2">
          <label htmlFor="category">
            Category *
            <br />
            <select name="category" id="category">
              <option value="">Select your Category</option>
              <option value="Shirts">Shirts</option>
              <option value="Jeans">Jeans</option>
              <option value="Jackets">Jackets</option>
              <option value="Sweaters">Sweaters</option>
              <option value="Accessories">Accessories</option>
            </select>
          </label>
          <br />
          <label htmlFor="ImageURL">
            Image_URL
            <br />
            <input type="text" name="Image_URL" placeholder="URL" id="ImageURL" />
          </label>
          <br />
        </div>

      </form>

    );
  }
}
