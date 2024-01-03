import React, { useState, useEffect } from 'react';
import PokemonCard from '../components/PokemonCard';
import isEqual from 'lodash/isEqual';

const Favorites = () => {
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];

        // Check if storedFavorites is different from the current favorites state
        if (!isEqual(storedFavorites, favorites)) {
            setFavorites(storedFavorites);
        }
    }, [favorites]);

    return (
        <div>
            {favorites.length > 0 ? (
                <div className="favorite-list">
                    <div>
                        <PokemonCard datas={favorites} title={"FAVORIS"} />
                    </div>
                </div>
            ) : (
                <p className='noFavorites'>Aucun favoris.</p>
            )}
        </div>
    );
};

export default Favorites;