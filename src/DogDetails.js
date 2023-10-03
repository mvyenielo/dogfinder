import { useParams } from "react-router-dom";
import { Navigate } from "react-router-dom";
// import { getSource } from "./dog";
import "./DogDetails.css";
/**
 * Renders details about a specific dog based on dog name in URL
 *
 * Props:
 * - dogList: Array of dog objects [{name: "Whiskey"...}, ...]
 */
function DogDetails({ dogList }) {
  const { name } = useParams();
  const dog = dogList.filter(dog => dog.name === name)[0];
  if (!dog) {
    return <Navigate to="/dogs" />;
  }

  return (
    <div>
      <div >
        <img src={`/${dog.src}.jpg`}></img>
      </div>
      <h3>{dog.name}</h3>
      <h4>Age: {dog.age}</h4>
      <ul className="DogDetails-facts">
        {dog.facts.map((fact, idx) => <li key={idx}>{fact}</li>)}
      </ul>
    </div>
  );
}

export default DogDetails;