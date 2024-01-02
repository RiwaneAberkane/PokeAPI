import React, { useState, useEffect } from 'react';
import addFavs from '../utils/addFavs';
import { Link } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as solidHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as regularHeart } from '@fortawesome/free-regular-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

library.add(faHeart);

const PokemonCard = ({ datas, title }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [favorites, setFavorites] = useState(JSON.parse(localStorage.getItem('favorites')) || []);


    // Filter Pokemon data based on search input
    const filteredPokemon = datas.filter((pokemon) =>
        pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleAddToFavorites = (pokemon) => {
        const isAlreadyFavorited = favorites.some((fav) => fav.id === pokemon.id);

        const updatedFavorites = isAlreadyFavorited
            ? favorites.filter((fav) => fav.id !== pokemon.id)
            : [...favorites, pokemon];

        addFavs({ items: datas, i: pokemon.id });
        // Mettez à jour le tableau des favoris
        setFavorites(updatedFavorites);
        // Stockez les favoris dans le local storage
        localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    };


    useEffect(() => {
        const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
        setFavorites(storedFavorites);
    }, []);

    return (
        <div className="pokemonCard">
            <h2>{title}</h2>
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
                                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
                                alt="Pokemon"
                            />
                            <button>{pokemon.name}</button>
                            <div className='buttonTypePokemon'>
                                {pokemon.types && pokemon.types.length > 0 && (
                                    pokemon.types.map((type, typeIndex) => (
                                        <button key={typeIndex} className={`type-${type.type.name}`}>{type.type.name}</button>
                                    ))
                                )}
                            </div>
                        </Link>
                        <FontAwesomeIcon
                            icon={favorites.some((fav) => fav.id === pokemon.id) ? solidHeart : regularHeart}
                            onClick={() => handleAddToFavorites(pokemon)}
                            style={{ color: favorites.some((fav) => fav.id === pokemon.id) ? "green" : "red" }}
                            key={pokemon.id}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PokemonCard;
