// src/components/PetList/PetList.jsx

export default function PetList({petsData, handleSelect,handleFormView,isFormOpen}){
    return(
        <div className="sidebar-container">
            <h1>Pet List</h1>
            <div className="list-container">
                {!petsData.length ? (<h2>No Pets Yet!</h2>) : (
                    <ul>
                        {petsData.map((pet)=>
                            <li key={pet.id}
                            style={{ cursor: 'pointer', color: "#646CFF" }}
                            onClick={() => handleSelect(pet)}>
                            {pet.name}</li>
                        )}
                    </ul>)}
            </div>
            <button onClick={handleFormView}>
                {isFormOpen ? 'Close Form' : 'New Pet'}
            </button>
        </div>
    )
}