import "./navbar.css"
import CartWidget from "./CartWidget"
import "./navbar.scss"
import { Link } from "react-router-dom"

const NavBar = () => {
  return (

    <nav className="navbar">
      <Link to="/"><img className="logo" src="https://e7.pngegg.com/pngimages/893/311/png-clipart-fishing-angling-logo-fishing-label-fishing-rods.png" alt="" /> </Link>
      <ul className="categories">
        <li className="category">
          <Link to="/category/caña" >Cañas</Link>
        </li>
        <li className="category">
          <Link to="/category/reel" >Reels</Link>
        </li>
        <li className="category">
          <Link to="/category/bolso" >Bolsos</Link>
        </li>
      </ul>
      <img className="cart" src="https://e7.pngegg.com/pngimages/8/373/png-clipart-shopping-bags-trolleys-shopping-cart-logo-online-shop-white-logo.png" alt="" />
    </nav>
  )
}

export default NavBar