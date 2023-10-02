import { useParams } from "react-router-dom";

function DogDetails({ dogList }) {
  const { name } = useParams();
  const dog = dogList.filter(dog => dog.name === name)[0];
}

export default DogDetails;