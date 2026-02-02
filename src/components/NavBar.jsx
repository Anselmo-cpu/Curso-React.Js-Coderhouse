import CartWidget from "./CartWidget"

function NavBar () {
    return (
        <nav> 
            <h2>Ansel Pedals</h2>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Digitals Pedals M Vave</a></li>
            </ul>
            <CartWidget />
        </nav>
    )
}

export default NavBar