import React, { useState, useEffect } from 'react';
import addFavs from '../utils/addFavs';
import { Link } from 'react-router-dom';
import Pagination from './Pagination';
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import isEqual from 'lodash/isEqual';

const PokemonCard = ({ datas, title }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [favorites, setFavorites] = useState(JSON.parse(localStorage.getItem('favorites')) || []);
    const [page, setPage] = useState(1);
    const [filteredPage, setFilteredPage] = useState(1);
    const pageSize = 50;

    const filteredPokemon = datas.filter((pokemon) =>
        pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    useEffect(() => {
        setFilteredPage(1);
    }, [searchTerm]);

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

        if (!isEqual(storedFavorites, favorites)) {
            setFavorites(storedFavorites);
        }
    }, [favorites]);

    const handlePageChange = (newPage) => {
        setPage(newPage);
        setFilteredPage(newPage);
    };

    const startIndex = (filteredPage - 1) * pageSize;
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
                        {favorites.some((fav) => fav.id === pokemon.id) ? (
                            <AiFillHeart
                                className="heart-icon favorited"
                                onClick={() => handleAddToFavorites(pokemon)}
                                key={pokemon.id}
                            />
                        ) : (
                            <AiOutlineHeart
                                className="heart-icon"
                                onClick={() => handleAddToFavorites(pokemon)}
                                key={pokemon.id}
                            />
                        )}
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