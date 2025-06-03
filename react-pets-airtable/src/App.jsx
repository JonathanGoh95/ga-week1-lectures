import "@picocss/pico/css/pico.css";
import debug from "debug";
import { Route, Routes } from "react-router";
import Navbar from "./components/Navbar";
import CreatePetPage from "./pages/CreatePetPage";
import EditPetPage from "./pages/EditPetPage";
import HomePage from "./pages/HomePage";
import OnePetPage from "./pages/OnePetPage";
import PetsPage from "./pages/PetsPage";

const log = debug("pets:App");

export default function App() {
  log("Loading Routes");
  return (
    <div className="container">
      <Navbar />
      <h1>Pets</h1>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/pets" element={<PetsPage />} />
        <Route path="/pets/new" element={<CreatePetPage />} />
        <Route path="/pets/:petId" element={<OnePetPage />} />
        <Route path="/pets/:petId/edit" element={<EditPetPage />} />
      </Routes>
    </div>
  );
}
