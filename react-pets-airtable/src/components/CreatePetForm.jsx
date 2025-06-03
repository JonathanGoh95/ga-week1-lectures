import debug from "debug";
import { useState } from "react";
import { useNavigate } from "react-router";
import { create } from "../services/petsService";

const log = debug("pets:components:CreatePetForm");

export default function CreatePetForm({ addPet }) {
  const [formData, setFormData] = useState({ name: "", age: "", breed: "bbb" });
  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    log("formData %o", formData);

    const pet = await create(formData);
    if (addPet) {
      addPet(pet);
    }
    navigate("/pets");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>Create Pet</legend>

          <label>
            Name:
            <input name="name" value={formData.name} onChange={handleChange} />
          </label>
          <br />

          <label>
            Age:
            <input
              name="age"
              type="number"
              value={formData.age}
              onChange={handleChange}
            />
          </label>
          <br />

          <label>
            Breed:
            <select name="breed" value={formData.breed} onChange={handleChange}>
              <option>Select your input</option>
              <option value="ccc">Cat</option>
              <option value="ddd">Dog</option>
              <option value="hhh">Hamster</option>
              <option value="bbb">Bird</option>
            </select>
          </label>
          <br />

          <button>Add Pet</button>
        </fieldset>
      </form>
    </>
  );
}
