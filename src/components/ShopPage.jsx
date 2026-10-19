import { useState, useEffect } from "react"
import '../styles/ShopPage.css'
import { ShoppingCartMinus, ShoppingCartPlus } from "lucide-react";
import { useOutletContext } from "react-router";

export default function ShopPage() {
    const {decrement, increment, updateQuantity, getCartItem} = useOutletContext();
    const [products, setProducts] = useState([]);
    const [visibleProds, setVisibleProds] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(response => response.json())
            .then(data => {
                setProducts(data);
                setVisibleProds(data);
            });
    }, []);

    function filterProducts(category) {
        if(category){
            setVisibleProds(products.filter((product) => product.category === category));
        }
        else {
            setVisibleProds(products);
        }
    }

    return (
        <main className="shop-page">
            <h1>Let's go shopping!</h1>
            <div className="filter-container">
                <button onClick={() => filterProducts(null)}>All</button>
                <button onClick={() => filterProducts("men's clothing")}>Men's Clothing</button>
                <button onClick={() => filterProducts("women's clothing")}>Women's Clothing</button>
                <button onClick={() => filterProducts("jewelery")}>Jewelery</button>
                <button onClick={() => filterProducts("electronics")}>Electronics</button>
            </div>
            <div className="shop products-container">
                {visibleProds.map(product => (
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