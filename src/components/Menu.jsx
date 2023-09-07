import { Link } from "react-router-dom";

export default function Menu() {

    return(
        <nav className="menu">
            <Link to="/">Home</Link>
            <Link to="/sobre">Sobre</Link>
            <Link to="/faq">Ajuda</Link>
            <Link to="/login">Login</Link>
        </nav>
    )
}