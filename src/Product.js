import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import "./abc/product.css"
function Product({ productsList, addTocart, fetchproductsByCategory }) {
    let { slug } = useParams()
    console.log(slug)

    useEffect(() => {
        if (slug) { fetchproductsByCategory(slug) }
    }, [slug])
    return (
        <div className='product_wrap'>
            {
                productsList?.map((items) => {
                    return <div className='product' key={items.id}>
                        <img className='product_images' src={items.image?.url} alt={items.name} />
                        <h3>{items.name}</h3>
                        <p>{items.price.formatted_with_symbol}</p>
                        <button onClick={() => addTocart(1, items.id)}>Add to Cart</button>
                    </div>
                })
            }
        </div>
    )
}


export default Product