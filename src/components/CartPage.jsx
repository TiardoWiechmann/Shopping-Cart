import { useOutletContext } from "react-router";
import { ShoppingCartMinus, ShoppingCartPlus } from "lucide-react";
import '../styles/CartPage.css';

export default function CartPage() {
    const {cart, decrement, increment} = useOutletContext();

    function totalProductPrice(product) {
        return Number((product.price * product.quantity).toFixed(2));
    }

    function finalPrice() {
        return cart.reduce((sum, current) => sum + totalProductPrice(current), 0).toFixed(2);
    }

    return (
        <main className="cart-page">
            <h1 className="cart-heading">Your current cart</h1>
            <div class="cart-container">
                {cart.map(product => (
                    <div className="cart product" key={product.id}>
                        <figure>
                            <img src={product.image}/>
                            <figcaption>
                                <p>{product.title}</p>
                                <div className="cart prices">
                                    <p className="price">${product.price}</p>
                                    <p>Number: {product.quantity}</p>
                                    <hr/>
                                    <p>Total: ${totalProductPrice(product)}</p>
                                </div>
                            </figcaption>
                        </figure>
                        <div className="cart number-of-items">
                                <button onClick={() => decrement(product)}>
                                    <ShoppingCartMinus size={18}/>
                                </button>
                                <button onClick={() => increment(product)}>
                                    <ShoppingCartPlus size={18}/>
                                </button>
                            </div>
                    </div>
                ))}
            </div>
            {cart.length > 0 
                    ? (
                    <div className="final-price">
                        <hr/>
                        <p>Final Price: ${finalPrice()}</p>
                    </div>) 
                    : null}
        </main>
    )
}