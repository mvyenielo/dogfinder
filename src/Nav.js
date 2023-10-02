import { Link } from "react-router-dom";
import "./Nav.css"

function Nav({ dogList }) {
  return (
    <navbar className="Navbar">
      <h1>Dogfinder</h1>
      <div className="Navbar-links">
        {dogList.map(dog => <Link to={`/dogs/${dog.name}`}>{dog.name}</Link>)}
      </div>
    </navbar>
  );
}

export default Nav;