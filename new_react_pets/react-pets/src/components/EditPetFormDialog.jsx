import { useEffect, useRef } from "react";
import EditPetForm from "./EditPetForm";

export default function EditPetFormDialog({ pet, open, updatePet }) {
  const dialogRef = useRef();

  useEffect(() => {
    if (open) {
      dialogRef.current?.showModal();
    } else {
      dialogRef.current?.close();
    }
  }, [open]);

  return (
    <dialog ref={dialogRef}>
      <EditPetForm pet={pet} updatePet={updatePet} />
    </dialog>
  );
}
