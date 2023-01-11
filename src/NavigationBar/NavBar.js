import "./NavBar.css";
import { Link } from "react-router-dom";
const NavigationBar = () => {
  return (
    <nav className="navbar">
      <h3>
        {" "}
        <Link to="/">Store</Link>
      </h3>
      <div className="link1">
        <Link to="/">Home</Link>
        <Link to="/regis">Register</Link>
      </div>
    </nav>
  );
};

export default NavigationBar;
