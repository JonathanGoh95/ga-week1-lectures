// src/components/PetDetail/PetDetail.jsx

export default function PetDetail({selected, handleFormView, handleDeletePet}){
    return(
        <>
        {selected === null ? (<div className="details-container"><h1>NO DETAILS</h1></div>) : (
                <div className="details-container">
                    <h1>{selected.name}</h1>
                    <h2>Breed: {selected.breed}</h2>
                    <h2>Age: {selected.age}</h2>
                    <div className="button-container">
                        <button onClick={() => handleFormView(selected)}>Edit Pet</button>
                        <button onClick={() => handleDeletePet(selected.id)}>Delete Pet</button>
                    </div>
                </div>
            )}
        </>
    )
}