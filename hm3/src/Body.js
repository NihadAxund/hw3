import React, { Component } from 'react'
import Product from './Product'

const Products = [
  {
    name: "Nike",
    image: "https://c.static-nike.com/a/images/f_auto,cs_srgb/w_1536,c_limit/g1ljiszo4qhthfpluzbt/123-joyride-cdp-apla-xa-xp.jpg",
    price: 1,
    discount: "5%",
    count: 1
  },
  {
    name: "Adidas ",
    image: "https://static.footshop.com/86485/15252.jpg",
    price: 1,
    discount: "5%",
    count: 1
  }
];

export default class Body extends Component {
  renderList() {
    return Products.map((item) => {
      if (item != null) {
        return <Product product={item} />;
      }
    });
  }

  render() {
    return (
      <section className='Product_Section'>
        {this.renderList()}
      </section>
    )
  }
}
