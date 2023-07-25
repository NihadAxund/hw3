import React from 'react'
import Colors from './Colors'
export default function Product({ product }) {

    if (product.count > 0) {
        return (

            <section className='product'>
                <img src={product.image}></img>

                <section className='Color_Sec'>
                    <Colors></Colors>
                </section>

                <section className='productName'>
                    {product.name}
                </section>
                <section className='ProductPrice'>
                    {product.price} $
                    <span>{product.discount}</span>
                </section>


            </section>
        )
    }
    else {
        return (

            <section className='product'>
                <img src={product.image}></img>
                <section className="Modal">
                    {":("}
                </section>
                <section className='Color_Sec'>
                    <Colors></Colors>
                </section>
                <section className='productName'>
                    {product.name}
                </section>
                <section className='ProductPrice'>
                    Not Be Found
                </section>


            </section>
        )

    }

}
