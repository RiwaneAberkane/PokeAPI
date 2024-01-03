import React, { useState, useEffect } from 'react';
import addFavs from '../utils/addFavs';
import { Link } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import Pagination from './Pagination'; 
import isEqual from 'lodash/isEqual';

library.add(faHeart);

const PokemonCard = ({ datas, title }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [favorites, setFavorites] = useState(JSON.parse(localStorage.getItem('favorites')) || []);
    const [page, setPage] = useState(1);
    const pageSize = 50; // Adjust the pageSize as needed

    const filteredPokemon = datas.filter((pokemon) =>
        pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleAddToFavorites = (pokemon) => {
        const isAlreadyFavorited = favorites.some((fav) => fav.id === pokemon.id);

        const updatedFavorites = isAlreadyFavorited
            ? favorites.filter((fav) => fav.id !== pokemon.id)
            : [...favorites, pokemon];

        addFavs({ items: datas, i: pokemon.id });
        setFavorites(updatedFavorites);
        localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    };

    useEffect(() => {
        const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];

        // Check if storedFavorites is different from the current favorites state
        if (!isEqual(storedFavorites, favorites)) {
            setFavorites(storedFavorites);
        }
    }, [favorites]);

    const handlePageChange = (newPage) => {
        setPage(newPage);
    };

    const startIndex = (page - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const displayedPokemon = filteredPokemon.slice(startIndex, endIndex);

    return (
        <div className="pokemonCard">
            <h2>{title}</h2>

            <input
                type="text"
                placeholder="Search Pokemon"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />

            <Pagination
                currentPage={page}
                totalPages={Math.ceil(filteredPokemon.length / pageSize)}
                onPageChange={handlePageChange}
            />

            <div className="pokemon-list">
                {displayedPokemon.map((pokemon, index) => (
                    <div className="pokemon" key={index}>
                        <div
                            className={`heart-icon ${favorites.some((fav) => fav.id === pokemon.id) ? "favorited" : ""}`}
                            onClick={() => handleAddToFavorites(pokemon)}
                            key={pokemon.id}
                        >
                            &hearts;
                        </div>
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
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PokemonCard;
