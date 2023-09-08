import { Link } from "react-router-dom";

export default function Menu() {

    return(
        <header>
            <nav className="menu">
                <Link className="menu-link" to="/">Home</Link>
                <Link className="menu-link" to="/sobre">Sobre</Link>
                <Link className="menu-link" to="/faq">Ajuda</Link>
                <Link className="menu-link" to="/login">Login</Link>
            </nav>
        </header>
    )
}