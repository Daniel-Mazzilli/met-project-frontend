import Hamburger from "../../assets/hamburger_light.png"
import "./Navbar.scss"

export default function Navbar (){
    return(
        <nav className="navbar">
            <img className="navbar__img" src={Hamburger} alt="hamburger menu icon"/>
            MET Explorer
        </nav>
    )
}