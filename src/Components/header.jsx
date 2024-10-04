import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="navbar">
      <Link to="/">Home</Link>

      <Link to="/page2">Contatos</Link>
    </nav>
  );
};
export default Header;
