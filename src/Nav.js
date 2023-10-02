import { Link } from "react-router-dom";
import "./Nav.css";

function Nav({ dogList }) {
  return (
    <nav className="Navbar">
      <h1>Dogfinder</h1>
      <div className="Navbar-links">
        {dogList.map(dog => <Link key={dog.name} to={`/dogs/${dog.name}`}>{dog.name}</Link>)}
      </div>
    </nav>
  );
}

export default Nav;