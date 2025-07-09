import { Outlet } from "react-router";
import useOnePet from "../hooks/useOnePet";

export default function HomePage() {
  const { pet, isError } = useOnePet("6287");

  if (isError) {
    return <p>Oops</p>;
  }

  return (
    <>
      <h2>Home</h2>

      <pre>{JSON.stringify(pet, null, 2)}</pre>

      <Outlet />
    </>
  );
}
