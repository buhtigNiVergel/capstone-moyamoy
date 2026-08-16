import { useState } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router';
import searchIcon from '../assets/images/icons/search-icon.png'
import cartIcon from '../assets/images/icons/cart-icon.png'
import './Header.css';

export function Header( {cart} ){
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const searchText = searchParams.get('search');
    const [search, setSearch] = useState(searchText || '');

    const updateSearchInput = (event) => {
        setSearch(event.target.value);
    };

    const searchProducts = () => {
        navigate(`/?search=${search}`);
    };

    let totalQuantity = 0;

    cart.forEach(cartItem => {
        totalQuantity =+ cartItem.quantity;
    });
    return(
        <>
            <div class="header">
            <div class="left-section">
                <Link href="/" class="header-link">
                <img class="logo"
                    data-testid="header-logo"
                    src="images/logo-white.png" />
                <img class="mobile-logo"
                    data-testid="header-mobile-logo"
                    src="images/mobile-logo-white.png" />
                </Link>
            </div>

            <div class="middle-section">
                <input className="search-bar" type="text" placeholder="Search"
                        value={search} 
                        onChange={updateSearchInput} 
                        data-testid="header-search-bar"/>

                <button className="search-button"
                        onClick={searchProducts}
                        data-testid="header-search-button">
                <img class="search-icon" src={searchIcon} />
                </button>
            </div>

            <div class="right-section">
                <Link class="orders-link header-link" to="/orders"
                     data-testid="header-orders-link">

                    <span class="orders-text">Orders</span>
                </Link>

                <Link class="cart-link header-link" to="/checkout" 
                    data-testid="header-cart-link">
                <img class="cart-icon" src={cartIcon} />
                <div class="cart-quantity">{totalQuantity}</div>
                <div class="cart-text">Cart</div>
                </Link>
            </div>
            </div>
        </>
    )
}