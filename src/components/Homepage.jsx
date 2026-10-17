import '../styles/Homepage.css';

export default function Homepage() {
    return (
            <main>
                <div className="text-container">
                    <h1>Look for something that suits you well!</h1>
                    <p>Find the things you always wanted. We have a big collection with variety of products that are of high quality.
                        No matter how much you are willing to pay. We are convinced that you find something which is perfect for you.
                    </p>
                </div>
                <div className="image-container">
                    <img 
                        alt="Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops"
                        src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png" 
                        />
                    <img 
                        alt="Mens Casual Premium Slim Fit T-Shirts" 
                        src="https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_t.png" 
                        />
                    <img 
                        alt="Mens Cotton Jacket" 
                        src="https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_t.png"
                        />
                </div>
            </main>
    )
}