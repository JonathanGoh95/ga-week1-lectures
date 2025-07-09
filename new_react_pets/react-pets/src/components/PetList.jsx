import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Link } from "react-router";
import { destroy } from "../services/petsService";

export default function PetList({ pets }) {
  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    mutationFn: ({ petId }) => destroy(petId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["pets"] });
    },
  });

  if (!pets.length) {
    return <p>No Pets</p>;
  }

  const handleDelete = (petId) => {
    mutate({ petId });
    // destroy(petId);
    // delPet(petId);
  };

  return (
    <ul>
      {pets.map((pet) => (
        <li key={pet.id}>
          <Link to={`/pets/${pet.id}`}>{pet.name}</Link>
          <button disabled onClick={() => handleDelete(pet.id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}
