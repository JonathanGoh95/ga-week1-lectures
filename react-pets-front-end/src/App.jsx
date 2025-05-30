// src/App.jsx
import { useState,useEffect } from 'react';
import * as petService from './services/petService'
import PetList from './components/PetList/PetList';
import PetDetail from './components/PetDetail/PetDetail';
import PetForm from './components/PetForm/PetForm';
import './App.css'

const App = () => {
  const [petsData,setPetsData] = useState([])
  const [selected, setSelected] = useState(null);
  const [isFormOpen, setIsFormOpen] = useState(false);
  // Set the Pets Data in the petsData state upon page load using useEffect hook
  useEffect(() => {             
  const fetchData = async () => {
    try{
    const data = await petService.petsData();
    if (fetchData.err) {
          throw new Error(fetchData.err);
    }
    setPetsData(data);
    } catch (err){
      console.log(err)
    }
  };
    fetchData();
  }, []);

  const handleSelect = (pet) => {
    setSelected(pet)
    setIsFormOpen(false);
  }

  const handleFormView = (pet) => {
    if (!pet.id) setSelected(null);
    setIsFormOpen(!isFormOpen);
  };

  const handleAddPet = async (formData) => {
    try {
      // Call petService.create, assign return value to newPet
      const newPet = await petService.create(formData);
      setPetsData([newPet, ...petsData]);
    } catch (err) {
      console.log(err);
    }
  };

  const handleUpdatePet = async (formData, petId) => {
    try {
    const updatedPet = await petService.update(formData, petId)
    if (updatedPet.err) {
      throw new Error(updatedPet.err);
    }
    const updatedPetList = petsData.map((pet) => (
      // If the _id of the current pet is not the same as the updated pet's _id,
      // return the existing pet.
      // If the _id's match, instead return the updated pet.
      pet.id !== updatedPet.id ? pet : updatedPet
    ));
    setPetsData(updatedPetList);
    // If we don't set selected to the updated pet object, the details page will
    // reference outdated data until the page reloads.
    setSelected(updatedPet);
    setIsFormOpen(false);
    } catch (err) {
      console.log(err);
    }
  };
  
  const handleDeletePet = async (petId) => {
    try {
    const deletedPet = await petService.deletePet(petId)
    if (deletedPet.err) {
      throw new Error(deletedPet.err);
    }
    setPetsData(petsData.filter((pet) => (pet.id !== deletedPet.id)))
    setSelected(null)
    setIsFormOpen(false)
    } catch (err) {
      console.log(err);
    }
  }

  return(
    <>
      <PetList petsData={petsData} handleSelect={handleSelect} handleFormView={handleFormView} isFormOpen={isFormOpen}/>
      {isFormOpen ? (
        <PetForm selected={selected} handleAddPet={handleAddPet} handleUpdatePet={handleUpdatePet}/>) :
        (<PetDetail selected={selected} handleFormView={handleFormView} handleDeletePet={handleDeletePet} />)
      }
    </>
  )
};

export default App;
