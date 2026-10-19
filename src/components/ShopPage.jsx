import { useState, useEffect } from "react"
import '../styles/ShopPage.css'
import { ShoppingCartMinus, ShoppingCartPlus } from "lucide-react";
import { useOutletContext } from "react-router";

export default function ShopPage() {
    const {decrement, increment, updateQuantity, getCartItem} = useOutletContext();
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(response => response.json())
            .then(data => setProducts(data));
    }, []);


    return (
        <main className="shop-page">
            <h1>Let's go shopping!</h1>
            <div className="filter-container">
                <button>All</button>
                <button>Men's Clothing</button>
                <button>Women's Clothing</button>
                <button>Jewelry</button>
                <button>Electronics</button>
            </div>
            <div className="shop products-container">
                {products.map(product => (
                        <div className="shop product" key={product.id}>
                            <figure>
                                <img src={product.image}/>
                                <figcaption>
                                    <p>{product.title}</p>
                                    <p className="shop price">${product.price}</p>
                                </figcaption>
                            </figure>
                            <div className="shop number-of-items">
                                <input 
                                    value={getCartItem(product)?.quantity ?? 0} 
                                    onChange={(event) => updateQuantity(Number(event.target.value), product)}
                                    type="number" 
                                    min={0} 
                                    max={99}/>
                                <button className="decr-incr" onClick={() => decrement(product)}>
                                    <ShoppingCartMinus size={18}/>
                                </button>
                                <button className="decr-incr" onClick={() => increment(product)}>
                                    <ShoppingCartPlus size={18}/>
                                </button>
                            </div>
                        </div>
                ))}
            </div>
        </main>
    )
}