import { NavLink } from "react-router-dom"

export default function Header(){
    return(
        <header>
            <h1>Welcome to my example of API calls</h1>
            <ul>
                <NavLink to="/">
                    <li>Home</li>
                </NavLink>
                <NavLink to="/dog">
                    <li>Dog</li>
                </NavLink>
                <NavLink to="cat">
                    <li>Cat</li>
                </NavLink>
            </ul>
        </header>
    )
}