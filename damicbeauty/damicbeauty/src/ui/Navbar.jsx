import Logo from "./Logo"
import { NavLink } from "react-router-dom";

function Navbar (){
    return(
        <div className="header">
            <Logo/>
            <ul className="navbar">
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/nail_bar">Nail Bar</NavLink>
                </li>
                <li>
                    <NavLink to="/hair_studio">Hair Studio</NavLink>
                </li>
                <li>
                    <NavLink to="/make_up">Make Up</NavLink>
                </li>
                <li>
                    <NavLink to="/reviews">Reviews</NavLink>
                </li>
                <li>
                    <NavLink to="/contact">Contact</NavLink>
                </li>
            </ul>

        </div>
    )
}
export default Navbar;