import debug from "debug";
import { useNavigate } from "react-router";
import { update } from "../services/petsService";

const log = debug("pets:components:EditPetForm");

export default function EditPetForm({ pet, updatePet }) {
  // const { petId } = useParams();
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    log(data);
    const updatedPet = await update(pet.id, data);
    updatePet(updatedPet);
    navigate(`/pets/${pet.id}`);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>Edit Pet</legend>

          <label>
            Name:
            <input name="name" defaultValue={pet.name} />
          </label>
          <br />

          <label>
            Age:
            <input name="age" type="number" defaultValue={pet.age} />
          </label>
          <br />

          <label>
            Breed:
            <select name="breed" defaultValue={pet.breed}>
              <option value="Cat">Cat</option>
              <option value="Dog">Dog</option>
              <option value="Hamster">Hamster</option>
              <option value="Bird">Bird</option>
            </select>
          </label>
          <br />

          <button>Edit Pet</button>
        </fieldset>
      </form>
    </>
  );
}
