import React from 'react'
import "./abc/footer.css"

function Footer() {
    return (
        <div className='footer'>
            <div className='footer_text'>
                <a href='#header__bottom1' className='footer_top'>Back to top</a>
                <div className='footerVerticalColumn'>
                    <ul>
                        <li>
                            <h3>Get to Know Us</h3>
                            <p>About Us</p>
                            <p>Careers</p>
                            <p>Press Releases</p>
                            <p>Amazon Science</p>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <h3>Connect with Us</h3>
                            <p>Facebook</p>
                            <p>Twitter</p>
                            <p>Instagram</p>
                        </li>
                    </ul>

                    <ul>
                        <li>
                            <h3>Make Money with Us</h3>
                            <p>Sell on Amazon</p>
                            <p>Sell under Amazon Accelerator</p>
                            <p>Protect and Build Your Brand</p>
                            <p>Amazon Global Selling</p>
                            <p>Become an Affiliate</p>
                            <p>Fulfilment by Amazon</p>
                            <p>Advertise Your Products</p>
                            <p>Amazon Pay on Merchants</p>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <h3>Let Us Help You</h3>
                            <p>COVID-19 and Amazon</p>
                            <p>Your Account</p>
                            <p>Returns Centre</p>
                            <p>100% Purchase Protection</p>
                            <p>Amazon App Download</p>
                            <p>Amazon Assistant Download</p>
                            <p>Help</p>
                        </li>
                    </ul>
                </div>

            </div>
        </div >
    )
}

export default Footer