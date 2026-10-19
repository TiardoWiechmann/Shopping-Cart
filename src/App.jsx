import './styles/App.css'
import { Link, Outlet } from "react-router";
import { useState } from 'react';

function App() {
    const [cart, setCart] = useState([]);

    function numberOfCartItems() {
        return cart.reduce((sum, current) => sum + current.quantity, 0);
    }

    return (
        <div className="container">
        <header>
            <Link to="home">Shopping Adventure</Link>
            <nav>
                <Link to="home">Home</Link>
                <Link to="shop">Shop</Link>
                <Link to="cart">Cart {numberOfCartItems()}</Link> 
            </nav>
        </header>
        <Outlet context={[cart, setCart]}/>
        <footer>
            <a>About Us</a>
            <a>Contact</a>
            <a>Career</a>
        </footer>
    </div>
    )
}

export default App
