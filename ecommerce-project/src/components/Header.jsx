import { NavLink } from 'react-router';
import searchIcon from '../assets/images/icons/search-icon.png'
import cartIcon from '../assets/images/icons/cart-icon.png'
import './Header.css';

export function Header( {cart} ){
    let totalQuantity = 0;

    cart.forEach(cartItem => {
        totalQuantity =+ cartItem.quantity;
    });
    return(
        <>
            <div class="header">
            <div class="left-section">
                <NavLink href="/" class="header-link">
                <img class="logo"
                    src="images/logo-white.png" />
                <img class="mobile-logo"
                    src="images/mobile-logo-white.png" />
                </NavLink>
            </div>

            <div class="middle-section">
                <input class="search-bar" type="text" placeholder="Search" />

                <button class="search-button">
                <img class="search-icon" src={searchIcon} />
                </button>
            </div>

            <div class="right-section">
                <NavLink class="orders-link header-link" to="/orders">

                    <span class="orders-text">Orders</span>
                </NavLink>

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