import { Link } from "react-router-dom";


const Footer = () => {
    return (
        <footer className="footer">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/page2">Pagina-2</Link></li>
            </ul>
        </footer>
    );
};
export default Footer;