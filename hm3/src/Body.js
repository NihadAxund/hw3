import React, { Component } from 'react'
import Product from './Product'

const Products = [
  {
    name: "Nike",
    image: "https://c.static-nike.com/a/images/f_auto,cs_srgb/w_1536,c_limit/g1ljiszo4qhthfpluzbt/123-joyride-cdp-apla-xa-xp.jpg",
    price: 300,
    discount: "15%",
    count: 5
  },
  {
    name: "Adidas ",
    image: "https://static.footshop.com/86485/15252.jpg",
    price: 500,
    discount: "5%",
    count: 10
  },
  {
    name: "Jordan Dior",
    image: "https://jingdaily.com/wp-content/uploads/2022/02/dior-air-jordan-1-analysis-luxury-streetwear-collaborations-1.jpg",
    price: 2000,
    discount: "5%",
    count: 0
  },
  {
    name: "Puma",
    image: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHVtYSUyMHNob2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80",
    price: 150,
    discount: "25%",
    count: 10
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
