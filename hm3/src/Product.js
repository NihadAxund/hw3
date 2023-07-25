import React from 'react'
import Colors from './Colors'

export default function Product({ product }) {

    return (
        <section className='product'>
            <img src={product.image}></img>
            <section className='Color_Sec'>
                <Colors></Colors>
            </section>

            <section className='productName'>
                {product.name}
            </section>

        </section>
    )
}
