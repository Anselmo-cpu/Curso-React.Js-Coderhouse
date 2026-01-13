import CartWidget from "./CartWidget"

function NavBar () {
    return (
        <nav> 
            <h2>Ansel Pedals</h2>
            <ul>
                <li><a href="#">Inicio</a></li>
                <li><a href="#">M vave Digitales</a></li>
            </ul>
            <CartWidget />
        </nav>
    )
}

export default NavBar