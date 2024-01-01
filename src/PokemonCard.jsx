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
                            <div>
                                <img
                                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`}
                                    alt="Pokemon"
                                />
                            </div>
                            <button>{pokemon.name}</button>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PokemonCard;
