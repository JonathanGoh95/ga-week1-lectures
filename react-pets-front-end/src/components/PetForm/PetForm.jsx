// src/components/PetForm/PetForm.jsx
import { useState } from "react";

export default function PetForm({selected,handleAddPet,handleUpdatePet}){
  const initialState = {
    name: '',
    age: '',
    breed: '',
  }
    
  const [formData, setFormData] = useState(selected ? selected : initialState);

  const handleChange = ({target}) => {
    setFormData({ ...formData, [target.name]: target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selected) {
       // Don't forget to pass both formData and the ._id!
       handleUpdatePet(formData, selected.id);
     } else {
       handleAddPet(formData);
     }
  }

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name"> Name: </label>
        <input
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <label htmlFor="age"> Age: </label>
        <input
          id="age"
          name="age"
          value={formData.age}
          onChange={handleChange}
          required
        />
        <label htmlFor="breed"> Breed: </label>
        <input
          id="breed"
          name="breed"
          value={formData.breed}
          onChange={handleChange}
        />
        <button type="submit">{selected ? 'Update Pet' : 'Add New Pet'}</button>
      </form>
    </div>
  );
}