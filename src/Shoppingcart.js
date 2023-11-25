import React from 'react'
import { useHistory } from 'react-router-dom'
import './abc/cart.css'
function Shoppingcart({ cart, removefromcart }) {
    const history = useHistory()
    return (
        <div className='checkout'>
            <div className='checkout_left'>
                <img src='https://th.bing.com/th/id/OIP.ibpqWFRHuWHTyXStEm2qbAHaB5?pid=ImgDet&rs=1' alt='' className='checkout__ad' />
                <div>
                    <h3>Hello Om</h3>
                    <h2 className='checkout__title'>Your shopping Basket</h2>
                    {
                        cart?.line_items?.map(items => {
                            return <div className='checkoutproduct' key={items.id}>
                                <img src={items.image?.url} alt={items.name} />
                                <div className='checkoutproduct__info'>
                                    <p className='checkoutproduct__title'>{items.name}</p>
                                    <p className='checkoutproduct__price'>
                                        <strong>{items.price.formatted_with_symbol} * {items.quantity} = {cart.currency.symbol} {items.price.raw * items.quantity}</strong>
                                    </p>
                                    <button onClick={() => removefromcart(items.id)}>Remove From Basket</button>
                                </div>
                            </div>
                        })

                    }
                    <div className='checkout__right'>
                        <div className='subtotal'>
                            <p>Subtotal ({cart?.total_items} items): <strong>₹{cart?.subtotal?.formatted_with_symbol}</strong></p>
                            <small className='subtotal__gift'>
                                <input type='checkbox' />This order contains a gift
                            </small>
                        </div>
                        <button onClick={() => history.push("/checkout")}>Proceed to checkout</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Shoppingcart