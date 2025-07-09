//* hook -> useXXX -> useOnePet -> participate in React stuff
//* js file -> no JSX here -> reuse & avoid clutter

import { useEffect, useState } from "react";
import { show } from "../services/petsService";

export default function useOnePet(petId) {
  const [pet, setPet] = useState({});
  const [status, setStatus] = useState("idle");

  useEffect(() => {
    const controller = new AbortController();
    const fetchPet = async () => {
      setStatus("loading");
      try {
        const pet = await show(petId, controller.signal);
        // if (!ignore) {
        setPet(pet);
        setStatus("done");
      } catch (error) {
        if (error.name === "AbortError") {
          // ignore abort errors
          return;
        }
        setStatus("error");
        console.error(error);
      }
      // }
    };

    // let ignore = false;
    fetchPet();

    //* can return void or return a cleanup function
    return () => {
      // ignore = true;
      controller.abort();
    };
  }, [petId]);

  const isLoading = status === "loading";
  const isError = status === "error";

  return { pet, setPet, status, isLoading, isError };
}
