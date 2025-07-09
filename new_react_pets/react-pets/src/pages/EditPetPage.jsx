import { useParams } from "react-router";
import EditPetForm from "../components/EditPetForm";
import useOnePet from "../hooks/useOnePet";

export default function EditPetPage() {
  const { petId } = useParams();
  const { pet } = useOnePet(petId);

  return (
    <>
      <h2>Edit Pet</h2>

      <EditPetForm pet={pet} />
    </>
  );
}
