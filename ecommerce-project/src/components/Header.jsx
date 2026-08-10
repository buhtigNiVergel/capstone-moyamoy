import { useState } from 'react';
import { Link, useNavigate } from 'react-router';
import searchIcon from '../assets/images/icons/search-icon.png'
import cartIcon from '../assets/images/icons/cart-icon.png'
import './Header.css';

export function Header( {cart} ){
    const navigate = useNavigate();
    const [search, setSearch] = useState('');

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
                    src="images/logo-white.png" />
                <img class="mobile-logo"
                    src="images/mobile-logo-white.png" />
                </Link>
            </div>

            <div class="middle-section">
                <input className="search-bar" type="text" placeholder="Search"
                        value={search} onChange={updateSearchInput} />

                <button className="search-button"
                        onClick={searchProducts}>
                <img class="search-icon" src={searchIcon} />
                </button>
            </div>

            <div class="right-section">
                <Link class="orders-link header-link" to="/orders">

                    <span class="orders-text">Orders</span>
                </Link>

                <a class="cart-link header-link" href="/checkout">
                <img class="cart-icon" src={cartIcon} />
                <div class="cart-quantity">{totalQuantity}</div>
                <div class="cart-text">Cart</div>
                </a>
            </div>
            </div>
        </>
    )
}