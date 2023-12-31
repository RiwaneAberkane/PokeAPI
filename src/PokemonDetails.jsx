import { useParams } from "react-router-dom";
import UseFetch from "./useFetch";

const PokemonDetails = () => {

    const { name } = useParams();
    const { datasDetails: pokemonDetails, isLoading } = UseFetch("https://pokeapi.co/api/v2/pokemon/" + name);


    return (
        <div className="pokemonDetails">
            {!isLoading && <dib>Loading...</dib>}
            <h4>Détail de {name} </h4>
            <p>{pokemonDetails.name}</p>
            <p>{pokemonDetails.base_experience}</p>
            <p>{pokemonDetails.weight}</p>
            {pokemonDetails.types && pokemonDetails.types.length > 0 && (
                <ul>
                    {pokemonDetails.types.map((type, index) => (
                        <li key={index}>Type {index + 1}: {type.type.name}</li>
                    ))}
                </ul>
            )}



        </div>);
}

export default PokemonDetails;