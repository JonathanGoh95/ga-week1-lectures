import debug from "debug";
import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { destroy } from "../services/petsService";
import EditPetFormDialog from "./EditPetFormDialog";

const log = debug("pets:components:PetDetails");

export default function PetDetail({ pet, setPet }) {
  log("pet %o", pet);

  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  if (!pet) {
    return null;
  }

  const handleDelete = () => {
    destroy(pet.id);
    navigate("/pets");
  };

  const updatePet = (pet) => {
    setPet(pet);
    setIsOpen(false);
  };

  return (
    <>
      <h2>{pet.name}</h2>

      <dl>
        <dt>Breed</dt>
        <dd>{pet.breed}</dd>
        <dt>Age</dt>
        <dd>{pet.age} years old</dd>
      </dl>

      <Link to={`/pets/${pet.id}/edit`}>
        <button>Edit</button>
      </Link>
      <button onClick={() => setIsOpen(!isOpen)}>Dialog Edit</button>
      <button onClick={handleDelete}>Delete</button>
      <EditPetFormDialog pet={pet} open={isOpen} updatePet={updatePet} />
    </>
  );
}
