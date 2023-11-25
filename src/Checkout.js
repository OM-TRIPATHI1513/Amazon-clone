import React, { useEffect, useState } from 'react'
import "./abc/checkout.css"
import commerce from './lib/commerce'
function Checkout({ cart }) {
    const [generatedtoken, setToken] = useState({});
    const [countriesList, setcountrieslist] = useState({});
    const getShippingCountries = async (tokenID) => {
        const { countries } = await commerce.services.localeListShippingCountries(tokenID)
        setcountrieslist(Object.entries(countries));
    }
    useEffect(() => {
        const generatedtoken = async (cartID) => {
            const token = await commerce.checkout.generateToken(cartID, { type: 'cart' })
            setToken(token);
            getShippingCountries(token.id);
        }
        generatedtoken(cart?.id)
    }, [cart])
    return (
        <div className='checkout_wrap'>
            <h2>Shipping Details</h2>
            <br />

            <form>
                <div className='checkout__form'>
                    <div className='checkout_column'>
                        <label>First Name*</label>
                        <input required name="firstname" />
                    </div>
                    <div className='checkout_column'>
                        <label>Last Name*</label>
                        <input required name="lastname" />
                    </div>
                    <div className='checkout_column'>
                        <label>Address*</label>
                        <input required name="address" />
                    </div>
                    <div className='checkout_column'>
                        <label>Email*</label>
                        <input required name="emailname" />
                    </div>
                    <div className='checkout_column'>
                        <label>city*</label>
                        <input required name="city" />
                    </div>
                    <div className='checkout_column'>
                        <label>Zip/Postal Code*</label>
                        <input required name="postal_code" />
                    </div>
                    <div className='checkout_column'>
                        <label>shipping country*</label>
                        <select name='country'>
                            <option>India</option>
                            <option>America</option>
                        </select>
                    </div>
                    <div className='checkout_column'>
                        <label>shipping subdivision*</label>
                        <select name='subdivision'>
                            <option>Uttar Pradesh</option>
                            <option>America</option>

                        </select>
                    </div>
                    <div className='checkout_column'>
                        <label>&nbsp;</label>
                        <button>Pay Now</button>
                    </div>
                </div>

            </form>
        </div>
    )
}

export default Checkout
