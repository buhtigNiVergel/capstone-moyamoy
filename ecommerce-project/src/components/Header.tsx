import { useState } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router';
import searchIcon from '../assets/images/icons/search-icon.png'
import cartIcon from '../assets/images/icons/cart-icon.png'
import './Header.css';

type HeaderProps = {
    cart: {
        productId: string;
        quantity: number;
        deliverOptionId: string;
    }[];
}

export function Header( {cart}: HeaderProps )
{
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const searchText = searchParams.get('search');
    const [search, setSearch] = useState(searchText || '');

    const updateSearchInput = (event: React.ChangeEvent<HTMLInputElement>) => {
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
            <div className="header">
            <div className="left-section">
                <Link to="/" className="header-link">
                <img className="logo"
                    data-testid="header-logo"
                    src="images/logo-white.png" />
                <img className="mobile-logo"
                    data-testid="header-mobile-logo"
                    src="images/mobile-logo-white.png" />
                </Link>
            </div>

            <div className="middle-section">
                <input className="search-bar" type="text" placeholder="Search"
                        value={search} 
                        onChange={updateSearchInput} 
                        data-testid="header-search-bar"/>

                <button className="search-button"
                        onClick={searchProducts}
                        data-testid="header-search-button">
                <img className="search-icon" src={searchIcon} />
                </button>
            </div>

            <div className="right-section">
                <Link className="orders-link header-link" to="/orders"
                     data-testid="header-orders-link">

                    <span className="orders-text">Orders</span>
                </Link>

                <Link className="cart-link header-link" to="/checkout" 
                    data-testid="header-cart-link">
                <img className="cart-icon" src={cartIcon} />
                <div className="cart-quantity">{totalQuantity}</div>
                <div className="cart-text">Cart</div>
                </Link>
            </div>
            </div>
        </>
    )
}