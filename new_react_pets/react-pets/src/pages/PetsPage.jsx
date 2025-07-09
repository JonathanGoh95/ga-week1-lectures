// import { useQuery } from "@tanstack/react-query";
import debug from "debug";
import CreatePetForm from "../components/CreatePetForm";
import PetList from "../components/PetList";
import { Outlet, useLoaderData } from "react-router";
// import { index } from "../services/petsService";

const log = debug("pets:pages:PetsPage");

export default function PetsPage() {
  // const [pets, setPets] = useState([]);
  // const query = useQuery({
  //   queryKey: ["pets"],
  //   staleTime: 1000 * 10,
  //   queryFn: index,
  //   // queryFn: () =>
  //   //   fetch("http://localhost:3000/pets").then((res) => res.json()),
  // });
  const pets = useLoaderData();
  const setPets = () => {};

  // useEffect(() => {
  //   const fetchPets = async () => {
  //     const pets = await index();
  //     setPets(pets);
  //   };
  //   fetchPets();
  // }, []);

  const addPet = (pet) => {
    log("add pet %o", pet);
    setPets([pet, ...pets]);
  };

  const delPet = (petId) => {
    // setPets(pets.filter(({ id }) => id !== petId));
    log("deleting %s", petId);
    setPets(pets.filter((pet) => pet.id !== petId));
  };

  // if (query.isLoading) {
  //   return <progress />;
  // }

  return (
    <>
      <h2>Pets</h2>
      {/* <pre>{JSON.stringify(query, null, 2)}</pre> */}
      <PetList pets={pets} delPet={delPet} />
      <CreatePetForm addPet={addPet} />
      <Outlet />
    </>
  );
}
