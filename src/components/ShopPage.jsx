import { useState, useEffect } from "react"
import '../styles/ShopPage.css'
import { ShoppingCartMinus, ShoppingCartPlus } from "lucide-react";
import { useOutletContext } from "react-router";

export default function ShopPage() {
    const [cart, setCart] = useOutletContext();
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(response => response.json())
            .then(data => setProducts(data));
    }, []);

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


    return (
        <div className="shop-container">
            <h1>Let's go shopping!</h1>
            <div className="filter-buttons">
                <button>All</button>
                <button>Men's Clothing</button>
                <button>Women's Clothing</button>
                <button>Jewelry</button>
                <button>Electronics</button>
            </div>
            <div className="products-container">
                {products.map(product => {
                    return (
                        <div className="product" key={product.id}>
                            <figure>
                                <img src={product.image}/>
                                <figcaption>
                                    <p>{product.title}</p>
                                    <p className="price">${product.price}</p>
                                </figcaption>
                            </figure>
                            <div className="number-of-items">
                                <input 
                                    value={getCartItem(product)?.quantity ?? 0} 
                                    onChange={(event) => updateQuantity(Number(event.target.value), product)}
                                    type="number" 
                                    min={0} 
                                    max={99}/>
                                <button onClick={() => decrement(product)}>
                                    <ShoppingCartMinus size={18}/>
                                </button>
                                <button onClick={() => increment(product)}>
                                    <ShoppingCartPlus size={18}/>
                                </button>
                            </div>
                        </div>
                )})}
            </div>
        </div>
    )
}