import './styles/App.css'
import { Link, Outlet } from "react-router";

function App() {

  return (
    <div className="container">
      <header>
          <a>Shopping Adventure</a>
          <nav>
              <Link to="home">Home</Link>
              <Link to="shop">Shop</Link>
              <Link to="cart">Cart</Link> 
          </nav>
      </header>
      <Outlet />
      <footer>
          <a>About Us</a>
          <a>Contact</a>
          <a>Career</a>
      </footer>
  </div>
  )
}

export default App
