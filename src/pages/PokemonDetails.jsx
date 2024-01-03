import React from "react";
import { useParams } from "react-router-dom";
import UseFetch from "../utils/useFetch";

const PokemonDetails = () => {
    const { name } = useParams();
    const { datasDetails: pokemonDetails, isLoading } = UseFetch("https://pokeapi.co/api/v2/pokemon/" + name);

    const getColorForStat = (statValue) => {
        if (statValue > 150) {
            return 'green';
        } else if (statValue > 100) {
            return 'blue';
        } else {
            return 'red';
        }
    }

    return (
        <div className="pokemonDetails">
            {isLoading && <div className="isLoading"></div>}
            {!isLoading && (
                <div className="pokemonCardDetails">
                    <p>{pokemonDetails.name}</p>
                    <img className="imgDetails"
                        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonDetails.id}.png`}
                        alt="Pokemon"
                    />
                    <img src="" alt="" />

                    <p>Exp : {pokemonDetails.base_experience}</p>
                    <p>Weight : {pokemonDetails.weight}</p>
                    <div className='buttonTypePokemon'>
                        {pokemonDetails.types && pokemonDetails.types.length > 0 && (
                            pokemonDetails.types.map((type, typeIndex) => (
                                <button key={typeIndex} className={`type-${type.type.name}`}>{type.type.name}</button>
                            ))
                        )}
                    </div>
                    {pokemonDetails.stats && pokemonDetails.stats.length > 0 && (
                        <div>
                            <h2>Stats</h2>
                            <ul className="statsList">
                                {pokemonDetails.stats.map((stat, index) => (
                                    <li key={index}>
                                        <span className="statName">{stat.stat.name}</span>
                                        <div className="statBarContainer">
                                            <div
                                                className="statBar"
                                                style={{ width: `${(stat.base_stat / 255) * 100}%`, backgroundColor: getColorForStat(stat.base_stat) }}
                                            >
                                                {stat.base_stat}
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}

export default PokemonDetails;
