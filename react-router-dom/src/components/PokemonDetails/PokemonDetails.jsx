// src/components/PokemonDetails/PokemonDetails.jsx
import { useParams } from 'react-router';

const PokemonDetails = ({pokemon}) => {
  // Always verify that any props are being passed correctly!
  console.log(pokemon); 
  const { pokemonId } = useParams(); // Variable name is from the variable declaration in Route after the ':'
  console.log('pokemonId:', pokemonId);

  // New code: Find a single pokemon object from the array of pokemon
  //           using the pokemonId from the URL params.
  const singlePokemon = pokemon.find((poke) => (
    poke._id === Number(pokemonId)
  ));
  console.log('Pokemon Object:', singlePokemon)

  return (
    <>
      <h2>Pokemon Details</h2>
      <dl>
        <dt>Weight:</dt>
        <dd>{singlePokemon.weight}</dd>
        <dt>Height:</dt>
        <dd>{singlePokemon.height}</dd>
      </dl>
    </>
  );
};

export default PokemonDetails;
