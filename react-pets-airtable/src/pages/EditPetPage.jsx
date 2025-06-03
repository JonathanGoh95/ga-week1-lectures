import { useEffect, useState } from "react";
import { useParams } from "react-router";
import EditPetForm from "../components/EditPetForm";
import { show } from "../services/petsService";

export default function EditPetPage({ pets }) {
  const [pet, setPet] = useState([]);
  const { petId } = useParams();

  useEffect(() => {
    const fetchPet = async () => {
      const pet = await show(petId);
      setPet(pet);
    };

    if (pets) {
      setPet(pets.find((pet) => pet.id === petId));
    } else {
      fetchPet();
    }
  }, [petId, pets]);

  return (
    <>
      <h2>Edit Pet</h2>

      <EditPetForm pet={pet} />
    </>
  );
}
