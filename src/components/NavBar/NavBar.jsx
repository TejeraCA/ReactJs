import "./navbar.css"
import CartWidget from "./CartWidget"

const NavBar= () => {
    return(
        <nav className = "navbar">
            <div className = "brand">
                <h2>BaitCasting Tejera</h2>
            </div>

<ul>
    <li>Cañas</li>
    <li>Reeles</li>
    <li>Señuelos</li>
    <li>Accesorios</li>
</ul>

            <CartWidget />
        </nav>
    )
}

export default NavBar