import './styles/App.css'
import { Link, Outlet } from "react-router";
import { useState } from 'react';

function App() {
    const [cart, setCart] = useState([]);

    function numberOfCartItems() {
        const total = cart.reduce((sum, current) => sum + current.quantity, 0);
        return total > 0 ? total : null;
    }

    function decrement(product) {
        const id = product.id;

        if(itemExistsInCart(id)) {
            const updatedCart = cart.map(cartItem => 
                cartItem.id === id ? {...cartItem, quantity: cartItem.quantity-1} : cartItem
            )
            .filter(cartItem => cartItem.quantity > 0);
            setCart(updatedCart);
        }
    }


    function increment(product){
        const id = product.id;

        if(itemExistsInCart(id)) {
            const updatedCart = cart.map(cartItem => 
                cartItem.id === id && cartItem.quantity < 100 
                    ? createCartItem(product, cartItem.quantity + 1) : cartItem
            )
            setCart(updatedCart);
        }
        else {
            setCart([...cart, createCartItem(product, 1)])
        }
    }

    function itemExistsInCart(id) {
        return cart.some(cart => cart.id === id);
    }

    function getCartItem(product) {
        return cart.find(item => item.id === product.id);
    }

    function createCartItem(product, quantity=0) {
        return {
                    id: product.id,
                    title: product.title,
                    image: product.image,
                    price: product.price,
                    quantity: quantity,
                };
    }

    function updateQuantity(newVal, product) {
        const id = product.id;

        if(itemExistsInCart(id)) {
            const updatedCart = cart.map(cartItem => 
                cartItem.id === id ?  createCartItem(product, newVal): cartItem
            )
            setCart(updatedCart);
        }
        else {
            const newItem = createCartItem(product);
            newItem.quantity = newVal;
            setCart([...cart, newItem]);
        }
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
        <Outlet context={{cart, setCart, decrement, increment, updateQuantity, getCartItem}}/>
        <footer>
            <a>About Us</a>
            <a>Contact</a>
            <a>Career</a>
        </footer>
    </div>
    )
}

export default App
