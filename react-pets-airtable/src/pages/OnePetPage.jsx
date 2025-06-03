import { useEffect, useState } from "react";
import { useParams } from "react-router";
import PetDetail from "../components/PetDetail";
import { show } from "../services/petsService";

export default function OnePetPage() {
  const [pet, setPet] = useState([]);
  const { petId } = useParams();

  useEffect(() => {
    const fetchPet = async () => {
      const pet = await show(petId);
      setPet(pet);
    };
    fetchPet();
  }, [petId]);

  return (
    <>
      <h2>One Pet</h2>
      <PetDetail pet={pet} setPet={setPet} />
    </>
  );
}
