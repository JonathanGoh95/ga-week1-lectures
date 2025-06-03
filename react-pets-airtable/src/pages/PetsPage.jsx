import debug from "debug";
import { useEffect, useState } from "react";
import CreatePetForm from "../components/CreatePetForm";
import PetList from "../components/PetList";
import { index } from "../services/petsService";

const log = debug("pets:pages:PetsPage");

export default function PetsPage() {
  const [pets, setPets] = useState([]);

  useEffect(() => {
    const fetchPets = async () => {
      const petsData = await index();
      setPets(petsData.records || []);
    };
    fetchPets();
  }, []);

  const addPet = (pet) => {
    log("add pet %o", pet);
    setPets([pet, ...pets]);
  };

  const delPet = (petId) => {
    // setPets(pets.filter(({ id }) => id !== petId));
    log("deleting %s", petId);
    setPets(pets.filter((pet) => pet.id !== petId));
  };

  return (
    <>
      <h2>Pets</h2>
      <CreatePetForm addPet={addPet} />
      <PetList pets={pets} delPet={delPet} />
    </>
  );
}
