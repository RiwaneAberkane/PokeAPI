import React, { useState, useEffect } from 'react';
import PokemonCard from '../components/PokemonCard';

const Favorites = () => {
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
        setFavorites(storedFavorites);
    }, []);

    return (
        <div>
            {favorites.length > 0 ? (
                <div className="favorite-list">
                    <div>
                        <PokemonCard datas={favorites} title={"Favorites"} />
                    </div>
                </div>
            ) : (
                <p>No favorites yet.</p>
            )}
        </div>
    );
};

export default Favorites;
