import { useState, useEffect } from "react"
import '../styles/ShopPage.css'
import { ShoppingCartMinus, ShoppingCartPlus } from "lucide-react";

export default function ShopPage() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(response => response.json())
            .then(data => setProducts(data));
    }, []);

    return (
        <div className="shop-container">
            <h1>Let's go shopping!</h1>
            <div className="filter-buttons">
                <button>All</button>
                <button>Men's Clothing</button>
                <button>Women's Clothing</button>
                <button>Jewelery</button>
                <button>Electronics</button>
            </div>
            <div className="products-container">
                {products.map(product => (
                    <div className="product">
                        <figure>
                            <img src={product.image}/>
                            <figcaption>
                                <p>{product.title}</p>
                                <p className="price">${product.price}</p>
                            </figcaption>
                        </figure>
                        <div className="number-of-items">
                            <input type="number" min={0} max={99}/>
                            <button>
                                <ShoppingCartMinus size={18}/>
                            </button>
                            <button>
                                <ShoppingCartPlus size={18}/>
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}