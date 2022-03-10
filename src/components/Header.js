import { NavLink } from "react-router-dom"

export default function Header(){
    return(
        <div>
            <h1>Welcome to my example of API calls</h1>
            <nav className="links">
                <NavLink to="/">
                    <li>Home</li>
                </NavLink>
                <NavLink to="/dog">
                    <li>Dog</li>
                </NavLink>
                <NavLink to="cat">
                    <li>Cat</li>
                </NavLink>
            </nav>
        </div>
    )
}