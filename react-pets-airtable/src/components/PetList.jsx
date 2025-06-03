import { Link } from "react-router";
import { destroy } from "../services/petsService";

export default function PetList({ pets, delPet }) {
  if (!pets.length) {
    return <p>No Pets</p>;
  }

  const handleDelete = (petId) => {
    destroy(petId);
    delPet(petId);
  };

  return (
    <ul>
      {pets.map((pet) => (
        <li key={pet.id}>
          <Link to={`/pets/${pet.id}`}>{pet.fields.name}</Link>
          <button onClick={() => handleDelete(pet.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}
