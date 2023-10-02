import { useParams } from "react-router-dom";
import { Navigate } from "react-router-dom";


function DogDetails({ dogList }) {
  const { name } = useParams();
  const dog = dogList.filter(dog => dog.name === name)[0];
  if (!dog) {
    return <Navigate to="/dogs" />;
  }

  return (
    <div>
      <div style={{ backgroundImage: `url(${dog.src})` }}>
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