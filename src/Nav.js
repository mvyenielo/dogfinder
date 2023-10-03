import { Link } from "react-router-dom";
import "./Nav.css";
/**
 * Renders Nav bar with links on all dog names
 *
 * Props:
 * - dogList: Array of dog objects [{name: "Whiskey"...}, ...]
 *
 */
function Nav({ dogList }) {
  return (
    <nav className="Navbar">
      <Link className="Nav-heading" to="/dogs"><h1 >Dogfinder</h1></Link>
      <div className="Navbar-links">
        {dogList.map(dog =>
          <Link
            className="Nav-Link"
            key={dog.name}
            to={`/dogs/${dog.name}`}>
            {dog.name}
          </Link>)}
      </div>
    </nav>
  );
}

export default Nav;