import React from 'react'
import "./abc/header.css"
import { Link } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search'
import ShoppingCart from '@material-ui/icons/ShoppingCart'
function Header({ cart, categoryList }) {
    return (
        <>
            <div className='header'>
                <Link to="/">
                    <img src='https://www.bing.com/th?id=OIP.WGxtnw81X7exO2PxiVlL9QHaEK&w=333&h=187&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2' className='header__logo' />
                </Link>

                <div className='header__search'>
                    <input type="text" />
                    <SearchIcon className="header__searchIcon" />
                </div>
                <div className='header__nav'>
                    <div className='header__option'>
                        <span className='header__optionone'>Hello Om</span>
                        <span className='header__optiontwo'>Sign in</span>
                    </div>
                    <div className='header__option'>
                        <span className='header__optionone'>Return</span>
                        <span className='header__optiontwo'>& Orders</span>
                    </div>
                    <div className='header__option'>
                        <span className='header__optionone'>Your</span>
                        <span className='header__optiontwo'>Prime</span>
                    </div>

                    <div className='header__optionbasket'>
                        <Link to="/cart">
                            <ShoppingCart />
                            <span>
                                {cart?.total_items}
                            </span>
                        </Link>
                    </div>
                </div>

            </div>
            <div id='header__bottom1' className='header__bottom'>
                <ul>
                    {
                        categoryList?.map(category => {
                            return <li key={category.id}>
                                <Link to={`/category/${category.slug}`}>
                                    {category.name}
                                </Link>
                            </li>
                        })
                    }


                    <li>
                        <img src="https://m.media-amazon.com/images/G/31/img17/Home/AmazonTV/Ravina/Desktop/SWM_400x39_Crushed-S2._CB620377409_.jpg" className='header__image' />
                    </li>
                </ul>
            </div>

        </>

    )
}

export default Header