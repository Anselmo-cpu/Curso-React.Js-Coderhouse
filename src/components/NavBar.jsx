import CartWidget from "./CartWidget"

function NavBar () {
    return (
        <nav> 
            <h2>Ansel Pedals</h2>
            <ul>
                <lu><a href="#">Inicio</a></lu>
                <lu><a href="#">M vave Digitales</a></lu>
                <lu><a href="#">M vave Analogos</a></lu>
            </ul>
            <CartWidget />
        </nav>
    )
}

export default NavBar