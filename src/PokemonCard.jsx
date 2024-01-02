import { useState } from 'react';
import { Link } from 'react-router-dom';

const PokemonCard = ({ datas, title }) => {
    const [searchTerm, setSearchTerm] = useState('');

    // Filter Pokemon data based on search input
    const filteredPokemon = datas.filter((pokemon) =>
        pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="pokemonCard">
            <h2>{title}</h2>

            {/* Search bar */}
            <input
                type="text"
                placeholder="Search Pokemon"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />

            <div className="pokemon-list">
                {filteredPokemon.map((pokemon, index) => (
                    <div className="pokemon" key={index}>
                        <Link to={`/details/${pokemon.name}`}>

                            <img
                                src={`https://img.pokemondb.net/artwork/large/${pokemon.name}.jpg`}
                                alt="Pokemon"
                            />

                            <button>{pokemon.name}</button>
                            {pokemon.types && pokemon.types.length > 0 && (
                                pokemon.types.map((type, index) => (
                                    <div className='buttonRype'>
                                        <button key={index}>{type.type.name}</button>
                                    </div>
                                ))
                            )}
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PokemonCard;
