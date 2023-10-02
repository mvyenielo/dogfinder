import { useParams } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { getSource } from "./dog";

function DogDetails({ dogList }) {
  const { name } = useParams();
  const dog = dogList.filter(dog => dog.name === name)[0];
  if (!dog) {
    return <Navigate to="/dogs" />;
  }

  return (
    <div>
      <div >
      <img src={getSource(dog.src)}></img>
      </div>
      <h3>{dog.name}</h3>
      <h4>Age: {dog.age}</h4>
      <ul>
        {dog.facts.map(fact => <li>{fact}</li>)}
      </ul>
    </div>
  );
}

export default DogDetails;