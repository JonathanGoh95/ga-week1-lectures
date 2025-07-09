// import { useQuery } from "@tanstack/react-query";
import { useLoaderData, useParams } from "react-router";
import PetDetail from "../components/PetDetail";
// import { show } from "../services/petsService";

export default function OnePetPage() {
  // const { petId } = useParams();
  // const { pet, setPet, status, isLoading } = useOnePet(petId);
  // const query = useQuery({
  //   queryKey: ["pets", petId],
  //   queryFn: () => show(petId),
  //   staleTime: 1000 * 30,
  //   placeholderData: {},
  // });

  // const pet = query.data;
  const pet = useLoaderData();
  const setPet = () => {};

  // if (query.isLoading) {
  //   return <progress />;
  // }

  // if (query.status === "error") {
  //   return <p>Oops</p>;
  // }

  return (
    <>
      <h2>One Pet</h2>
      <PetDetail pet={pet} setPet={setPet} />
    </>
  );
}
