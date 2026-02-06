import { Link } from "react-router-dom"
import CartWidget from "./CartWidgets"



function NavBar () {
    return (
        <nav> 
            <h2>Ansel Pedals</h2>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>

                <li>
                    <Link to="/category/digital">Digitals Pedals M Vave</Link>
                </li>

                <li>
                    <Link to="/cart">Carrito</Link>
                </li>

                <li>
                    <CartWidget />
                </li>
                
            </ul>
        </nav>
    )
}

export default NavBar