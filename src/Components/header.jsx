import { Link } from "react-router-dom";
import "../App.css";

const Header = () => {
    return (
        <nav className="navbar">
            <Link to="/">Home</Link>   
            <Link to="/page2">Pagina-2</Link>
        </nav>
    );
};
export default Header;